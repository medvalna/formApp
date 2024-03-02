import { FastifyRequest } from "fastify";
import { createForm, getForms } from "./forms.service";
import { CreateFormInput } from "./forms.schema";

export async function createFormHandler(
  request: FastifyRequest<{ Body: CreateFormInput }>
) {
  const form = await createForm({
    ...request.body,
    creatorId: request.user.userId,
  });
  return form;
}

export async function getFormsHandler(request: FastifyRequest) {
  console.log(request.user.userId);
  const forms = await getForms({ creatorId: request.user.userId });
  return forms;
}

// export async function updateFormsHandler() {
//   const forms = await getForms();
//   return forms;
// }
