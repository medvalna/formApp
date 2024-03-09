import { FastifyRequest } from "fastify";
import { CreateOptionInput, GetOptionsInput } from "./options.schema";
import { createOption, getOptions } from "./options.service";
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
