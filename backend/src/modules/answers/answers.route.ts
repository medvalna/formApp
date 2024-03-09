import { FastifyInstance } from "fastify";
import {
  createAnswerHandler,
  deleteAnswerHandler,
  getAnswersHandler,
} from "./answers.controller";
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
  server.get(
    "/:formId",
    {
      preHandler: [server.authenticate],
      schema: {
        response: {
          201: $ref("getAnswersResponseSchema"),
        },
      },
    },
    getAnswersHandler
  );
  server.delete(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("deleteAnswerSchema"),
      },
    },
    deleteAnswerHandler
  );
}
export default answerRoutes;
