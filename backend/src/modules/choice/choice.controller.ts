import { FastifyRequest } from "fastify";
import { createChoice } from "./choice.service";
import { CreateChoiceInput } from "./choice.schema";

export async function createChoiceHandler(
  request: FastifyRequest<{ Body: CreateChoiceInput }>
) {
  const choice = await createChoice({
    ...request.body,
  });
  return choice;
}
