import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";
const optionInput = {
  text: z.string(),
  relatedQuestionId: z.string(),
};

const optionGenerated = {
  optionId: z.string(),
};

const createOptionSchema = z.object({
  ...optionInput,
});

const optionResponseSchema = z.object({
  ...optionInput,
  ...optionGenerated,
});

const getOptionsSchema = z.object({
  questionId: z.string(),
});
const getOptionResponseSchema = z.object({
  text: z.string(),
  optionId: z.string(),
});
const getOptionsResponseSchema = z.array(getOptionResponseSchema);
const optionsResponseSchema = z.array(optionResponseSchema);

export type CreateOptionInput = z.infer<typeof createOptionSchema>;
export type GetOptionsInput = z.infer<typeof getOptionsSchema>;
export const { schemas: optionSchemas, $ref } = buildJsonSchemas(
  {
    createOptionSchema,
    optionResponseSchema,
    optionsResponseSchema,
    getOptionsSchema,
    getOptionResponseSchema,
    getOptionsResponseSchema,
  },
  { $id: "optionSchema" }
);
