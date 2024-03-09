import { FastifyInstance } from "fastify";
import {
  createSingleChoiceHandler,
  getChoicesHandler,
} from "./choice.controller";
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
    createSingleChoiceHandler
  );
  server.get(
    "/:answerId",
    {
      preHandler: [server.authenticate],
      schema: {
        response: { 201: $ref("getChoicesResponseSchema") },
      },
    },
    getChoicesHandler
  );
}
export default choiceRoutes;
