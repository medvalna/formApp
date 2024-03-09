import { FastifyReply, FastifyRequest } from "fastify";
import { createSingleChoice, deleteChoice, getChoice } from "./choice.service";
import {
  CreateSingleChoiceInput,
  DeleteChoice,
  GetChoice,
} from "./choice.schema";

export async function createSingleChoiceHandler(
  request: FastifyRequest<{ Body: CreateSingleChoiceInput }>
) {
  const choice = await createSingleChoice({
    ...request.body,
  });
  return choice;
}

export async function getChoicesHandler(
  request: FastifyRequest<{ Params: GetChoice }>
) {
  const answerId = request.params.answerId;

  return await getChoice({
    relatedAnswerId: answerId,
  });
}

export async function deleteChoiceHandler(
  request: FastifyRequest<{ Body: DeleteChoice }>,
  reply: FastifyReply
) {
  await deleteChoice({ ...request.body });
  return reply.send({ ok: true });
}
