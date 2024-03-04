import { FastifyInstance } from "fastify";
import { createChoiceHandler } from "./choice.controller";
import { $ref } from "./choice.schema";
async function choiceRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("createChoiceSchema"),
        response: {
          201: $ref("choiceResponseSchema"),
        },
      },
    },
    createChoiceHandler
  );
}
export default choiceRoutes;
