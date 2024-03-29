﻿import { FastifyInstance } from "fastify";
import {
  createOptionHandler,
  deleteOptionsHandler,
  editOptionsHandler,
  getOptionsHandler,
} from "./options.controller";
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
  server.patch(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("editOptionInputSchema"),
      },
    },
    editOptionsHandler
  );
  server.delete(
    "/",
    {
      preHandler: [server.authenticate],
      schema: {
        body: $ref("deleteOptionSchema"),
      },
    },
    deleteOptionsHandler
  );
}

export default optionRoutes;
