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
const updateFormSchema = z.object({
  title: z.string(),
  isAnonymous: z.boolean(),
  isPublished: z.boolean(),
  formId: z.string({ required_error: "FormId is required" }),
});
const updateFormResponseSchema = z.object({
  title: z.string(),
  isAnonymous: z.boolean(),
  isPublished: z.boolean(),
});
const formsResponseSchema = z.array(formResponseSchema);

export type CreateFormInput = z.infer<typeof createFormSchema>;
export type UpdateFormInput = z.infer<typeof updateFormSchema>;

export const { schemas: formSchemas, $ref } = buildJsonSchemas(
  {
    createFormSchema,
    formResponseSchema,
    formsResponseSchema,
    updateFormSchema,
    updateFormResponseSchema,
  },
  { $id: "formSchema" }
);
