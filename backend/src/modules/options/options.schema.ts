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

const optionsResponseSchema = z.array(optionResponseSchema);

export type CreateOptionInput = z.infer<typeof createOptionSchema>;

export const { schemas: optionSchemas, $ref } = buildJsonSchemas(
  {
    createOptionSchema,
    optionResponseSchema,
    optionsResponseSchema,
  },
  { $id: "optionSchema" }
);
