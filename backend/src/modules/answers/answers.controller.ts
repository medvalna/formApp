import { FastifyRequest } from "fastify";
import { createAnswer } from "./answers.service";
import { CreateAnswerInput } from "./answers.schema";

export async function createAnswerHandler(
  request: FastifyRequest<{ Body: CreateAnswerInput }>
) {
  const answer = await createAnswer({
    ...request.body,
    responderId: request.user.userId,
  });
  return answer;
}
