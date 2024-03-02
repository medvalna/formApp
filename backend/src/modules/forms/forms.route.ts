import { FastifyInstance } from "fastify";
import { createFormHandler, getFormsHandler } from "./forms.controller";
import { $ref } from "./forms.schema";
async function formRoutes(server: FastifyInstance) {
  server.post(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("createFormSchema"),
        response: {
          201: $ref("formResponseSchema"),
        },
      },
    },
    createFormHandler
  );
  server.get(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        response: {
          200: $ref("formsResponseSchema"),
        },
      },
    },
    getFormsHandler
  );
}
export default formRoutes;
