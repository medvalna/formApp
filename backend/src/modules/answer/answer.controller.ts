import { FastifyRequest } from "fastify";
import { createAnswer } from "./answer.service";
import { CreateAnswerInput } from "./answer.schema";

export async function createAnswerHandler(
  request: FastifyRequest<{ Body: CreateAnswerInput }>
) {
  const form = await createAnswer({
    ...request.body,
    responderId: request.user.userId,
  });
  return form;
}
