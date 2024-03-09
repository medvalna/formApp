import { FastifyInstance } from "fastify";
import { createOptionHandler, getOptionsHandler } from "./options.controller";
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
  server.get(
    "/:questionId",
    {
      preHandler: [server.authenticate],
      schema: {
        response: {
          200: $ref("getOptionsResponseSchema"),
        },
      },
    },
    getOptionsHandler
  );
}

export default optionRoutes;
