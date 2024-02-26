import { FastifyReply, FastifyRequest } from "fastify";
import { createForm, getForms } from "./forms.service";
import { CreateFormInput } from "./forms.schema";

export async function createFormHandler(
  request: FastifyRequest<{ Body: CreateFormInput }>
) {
  const form = await createForm({
    ...request.body,
    creatorId: request.user.userId,
  });
  return form;
}

export async function getFormsHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const forms = await getForms();
  return forms;
}
