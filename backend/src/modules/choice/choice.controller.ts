import { FastifyReply, FastifyRequest } from "fastify";
import { createSingleChoice, getChoice } from "./choice.service";
import { CreateSingleChoiceInput, GetChoice } from "./choice.schema";

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
