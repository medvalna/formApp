import { FastifyInstance } from "fastify";
import { createSingleChoiceHandler } from "./choice.controller";
import { $ref } from "./choice.schema";
async function choiceRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("createSingleChoiceSchema"),
        response: {
          201: $ref("choiceResponseSchema"),
        },
      },
    },
    createSingleChoiceHandler
  );
}
export default choiceRoutes;
