import { FastifyRequest } from "fastify";
import { CreateOptionInput } from "./options.schema";
import { createOption } from "./options.service";
export async function createOptionHandler(
  request: FastifyRequest<{ Body: CreateOptionInput }>
) {
  const option = await createOption({
    ...request.body,
  });
  return option;
}
