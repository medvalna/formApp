import { FastifyRequest } from "fastify";
import { createAnswer, getAnswers } from "./answers.service";
import { CreateAnswerInput, GetAnswerInput } from "./answers.schema";

export async function createAnswerHandler(
  request: FastifyRequest<{ Body: CreateAnswerInput }>
) {
  const answer = await createAnswer({
    ...request.body,
    responderId: request.user.userId,
  });
  return answer;
}

export async function getAnswersHandler(
  request: FastifyRequest<{ Params: GetAnswerInput }>
) {
  const formId = request.params.formId;
  const answer = await getAnswers({
    formId,
    responderId: request.user.userId,
  });
  return answer;
}
