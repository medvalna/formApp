import { FastifyReply, FastifyRequest } from "fastify";
import {
  CreateOptionInput,
  EditOptionInput,
  GetOptionsInput,
} from "./options.schema";
import { createOption, editOptions, getOptions } from "./options.service";
export async function createOptionHandler(
  request: FastifyRequest<{ Body: CreateOptionInput }>
) {
  const option = await createOption({
    ...request.body,
  });
  return option;
}

export async function getOptionsHandler(
  request: FastifyRequest<{ Params: GetOptionsInput }>
) {
  const questionId = request.params.questionId;
  console.log("id:", questionId);
  const options = await getOptions({
    relatedQuestionId: questionId,
  });
  return options;
}

export async function editOptionsHandler(
  request: FastifyRequest<{ Body: EditOptionInput }>,
  reply: FastifyReply
) {
  await editOptions({
    ...request.body,
  });
  return reply.send({ ok: true });
}
