import { FastifyInstance } from "fastify";
import { createQuestionHandler } from "./question.controller";
import { $ref } from "./question.schema";
async function questionRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("createQuestionSchema"),
        response: {
          201: $ref("questionResponseSchema"),
        },
      },
    },
    createQuestionHandler
  );
}
export default questionRoutes;
