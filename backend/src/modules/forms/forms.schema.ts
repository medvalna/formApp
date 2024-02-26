import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const formInput = {
  title: z.string(),
  isAnonymous: z.boolean(),
  isPublished: z.boolean(),
};

const formGenerated = {
  formId: z.string(),
};

const createFormSchema = z.object({
  ...formInput,
});
const formResponseSchema = z.object({
  ...formInput,
  ...formGenerated,
});

const formsResponseSchema = z.array(formResponseSchema);

export type CreateFormInput = z.infer<typeof createFormSchema>;

export const { schemas: formSchemas, $ref } = buildJsonSchemas(
  {
    createFormSchema,
    formResponseSchema,
    formsResponseSchema,
  },
  { $id: "formSchema" }
);
