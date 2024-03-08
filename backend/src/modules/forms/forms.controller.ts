import { FastifyReply, FastifyRequest } from "fastify";
import { createForm, deleteForm, getForms, updateForm } from "./forms.service";
import {
  CreateFormInput,
  DeleteFormInput,
  UpdateFormInput,
} from "./forms.schema";

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
  request: FastifyRequest<{ Body: UpdateFormInput }>,
  reply: FastifyReply
) {
  await updateForm({
    ...request.body,
    creatorId: request.user.userId,
  });
  return reply.send({ ok: true });
}

export async function deleteFormHandler(
  request: FastifyRequest<{ Body: DeleteFormInput }>,
  reply: FastifyReply
) {
  await deleteForm({
    ...request.body,
    creatorId: request.user.userId,
  });
  return reply.send({ ok: true });
}
