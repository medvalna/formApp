import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import fjwt from "@fastify/jwt";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import userRoutes from "./modules/user/user.route";
import formRoutes from "./modules/forms/forms.route";
import { userSchemas } from "./modules/user/user.schema";
import { formSchemas } from "./modules/forms/forms.schema";
import { version } from "../package.json";

export const server = Fastify();

declare module "fastify" {
  export interface FastifyInstance {
    authenticate: any;
  }
}
declare module "@fastify/jwt" {
  interface FastifyJWT {
    user: {
      userId: string;
      email: string;
    };
  }
}
server.register(fjwt, {
  secret: "sasfaiofnaoisufhafnjwpof",
});
server.decorate(
  "authenticate",
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (e) {
      return reply.send(e);
    }
  }
);
server.get("/check", async function () {
  return { status: "OK" };
});

async function main() {
  for (const schema of [...userSchemas, ...formSchemas]) {
    server.addSchema(schema);
    console.log(schema);
  }

  server.register(userRoutes, { prefix: "api/users" });
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
    console.log("server ready at http://localhost:3000");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
