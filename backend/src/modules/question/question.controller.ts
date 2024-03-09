﻿import { FastifyReply, FastifyRequest } from "fastify";
import {
  createQuestion,
  deleteQuestion,
  editQuestion,
} from "./question.service";
import { CreateQuestionInput, EditQuestionInput } from "./question.schema";

export async function createQuestionHandler(
  request: FastifyRequest<{ Body: CreateQuestionInput }>
) {
  const form = await createQuestion({
    ...request.body,
    creatorId: request.user.userId,
  });
  return form;
}

export async function editQuestionHandler(
  request: FastifyRequest<{ Body: EditQuestionInput }>,
  reply: FastifyReply
) {
  await editQuestion({
    ...request.body,
    creatorId: request.user.userId,
  });
  return reply.send({ ok: true });
}
export async function deleteQuestionHandler(
  request: FastifyRequest<{ Body: EditQuestionInput }>,
  reply: FastifyReply
) {
  await deleteQuestion({
    ...request.body,
    creatorId: request.user.userId,
  });
  return reply.send({ ok: true });
}
