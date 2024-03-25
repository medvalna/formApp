import { FastifyInstance } from "fastify";
import { checkAuthHandler, registerUserHandler } from "./user.controller";
import { loginHandler } from "./user.controller";
import { $ref } from "./user.schema";
async function userRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      schema: {
        body: $ref("createUserSchema"),
        response: {
          201: $ref("createUserResponseSchema"),
        },
      },
    },
    registerUserHandler
  );
  server.post(
    "/checkauth",
    {
      schema: {
        body: $ref("isUserAuthSchema"),
        response: {
          200: $ref("isUserAuthResponseSchema"),
        },
      },
    },
    checkAuthHandler
  );
  server.post(
    "/login",
    {
      schema: {
        body: $ref("loginSchema"),
        response: {
          200: $ref("loginResponseSchema"),
        },
      },
    },
    loginHandler
  );
}

export default userRoutes;
