import { FastifyRequest } from "fastify";
import { createQuestion } from "./question.service";
import { CreateQuestionInput } from "./question.schema";

export async function createQuestionHandler(
  request: FastifyRequest<{ Body: CreateQuestionInput }>
) {
  const form = await createQuestion({
    ...request.body,
    creatorId: request.user.userId,
  });
  return form;
}
