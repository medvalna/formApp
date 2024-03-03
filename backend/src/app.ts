import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import fjwt from "@fastify/jwt";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import userRoutes from "./modules/user/user.route";
import formRoutes from "./modules/forms/forms.route";
import { userSchemas } from "./modules/user/user.schema";
import { formSchemas } from "./modules/forms/forms.schema";
import { version } from "../package.json";
import questionRoutes from "./modules/question/question.route";
import { questionSchemas } from "./modules/question/question.schema";
import { optionSchemas } from "./modules/options/options.schema";
import optionRoutes from "./modules/options/options.route";
const swaggerOptions = {
  swagger: {
    info: {
      title: "Form App API",
      description: "API for Form APP",
      version: version,
    },
    host: "localhost",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "Default", description: "Default" }],
  },
};
const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
  staticCSP: true,
  openapi: {
    info: {
      title: "Form App API",
      description: "API for Form APP",
      version: version,
    },
  },
};

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
  for (const schema of [
    ...userSchemas,
    ...formSchemas,
    ...questionSchemas,
  ]) {
    server.addSchema(schema);
    console.log(schema);
  }

  server.register(swagger, swaggerOptions);
  server.register(swaggerUi, swaggerUiOptions);
  server.register(userRoutes, { prefix: "api/users" });
  server.register(formRoutes, { prefix: "api/forms" });
  server.register(questionRoutes, { prefix: "api/questions" });
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
    console.log("server ready at http://localhost:3000");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
