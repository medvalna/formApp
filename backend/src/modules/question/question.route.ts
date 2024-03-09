import { FastifyInstance } from "fastify";
import {
  createQuestionHandler,
  deleteQuestionHandler,
  editQuestionHandler,
} from "./question.controller";
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
  server.patch(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("editQuestionSchema"),
      },
    },
    editQuestionHandler
  );
  server.delete(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("deleteQuestionSchema"),
      },
    },
    deleteQuestionHandler
  );
}
export default questionRoutes;
