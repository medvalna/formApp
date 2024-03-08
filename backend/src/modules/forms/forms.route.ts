import { FastifyInstance } from "fastify";
import {
  createFormHandler,
  deleteFormHandler,
  getFormsHandler,
  updateFormsHandler,
} from "./forms.controller";
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
  server.patch(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("updateFormSchema"),
        response: {
          201: $ref("updateFormResponseSchema"),
        },
      },
    },
    updateFormsHandler
  );
  server.delete(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("deleteFormSchema"),
      },
    },
    deleteFormHandler
  );
}
export default formRoutes;
