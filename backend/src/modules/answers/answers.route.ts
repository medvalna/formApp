import { FastifyInstance } from "fastify";
import { createAnswerHandler } from "./answers.controller";
import { $ref } from "./answers.schema";
async function answerRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("createAnswerSchema"),
        response: {
          201: $ref("answerResponseSchema"),
        },
      },
    },
    createAnswerHandler
  );
}
export default answerRoutes;
