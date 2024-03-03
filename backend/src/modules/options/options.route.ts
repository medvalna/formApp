import { FastifyInstance } from "fastify";
import { createOptionHandler } from "./options.controller";
import { $ref } from "./options.schema";
async function optionRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      schema: {
        body: $ref("createOptionSchema"),
        response: {
          201: $ref("optionResponseSchema"),
        },
      },
    },
    createOptionHandler
  );
}

export default optionRoutes;
