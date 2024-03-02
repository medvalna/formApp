import { FastifyRequest } from "fastify";
import { createForm, getForms, updateForm } from "./forms.service";
import { CreateFormInput, UpdateFormInput } from "./forms.schema";

export async function createFormHandler(
  request: FastifyRequest<{ Body: CreateFormInput }>
) {
  const form = await createForm({
    ...request.body,
    creatorId: request.user.userId,
  });
  return form;
}

export async function getFormsHandler(request: FastifyRequest) {
  const forms = await getForms({ creatorId: request.user.userId });
  return forms;
}

export async function updateFormsHandler(
  request: FastifyRequest<{ Body: UpdateFormInput }>
) {
  const forms = await updateForm({
    ...request.body,
    creatorId: request.user.userId,
  });
  return forms;
}
