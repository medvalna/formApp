import { FastifyRequest } from "fastify";
import { createSingleChoice } from "./choice.service";
import { CreateSingleChoiceInput } from "./choice.schema";

export async function createSingleChoiceHandler(
  request: FastifyRequest<{ Body: CreateSingleChoiceInput }>
) {
  const choice = await createSingleChoice({
    ...request.body,
  });
  return choice;
}
