import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const choiceInput = {
  relatedAnswerId: z.string(),
  relatedQuestionId: z.string(),
  options: z.string().array().optional(),
  input: z.string().optional(),
};

const choiceGenerated = {
  choiceId: z.string(),
};

const createChoiceSchema = z.object({
  ...choiceInput,
});
const choiceResponseSchema = z.object({
  ...choiceInput,
  ...choiceGenerated,
});

const choicesResponseSchema = z.array(choiceResponseSchema);
const getChoiceSchema = z.object({
  answerId: z.string(),
});
const getChoiceResponseSchema = z.object({
  relatedQuestionId: z.string(),
  options: z
    .object({
      option: z.object({
        optionId: z.string(),
        text: z.string(),
      }),
    })
    .array()
    .optional(),
  input: z.string().optional(),
});
const getChoicesResponseSchema = z.array(getChoiceResponseSchema);
export type CreateSingleChoiceInput = z.infer<typeof createChoiceSchema>;
export type GetChoice = z.infer<typeof getChoiceSchema>;
export const { schemas: choiceSchemas, $ref } = buildJsonSchemas(
  {
    createChoiceSchema: createChoiceSchema,
    choiceResponseSchema,
    choicesResponseSchema,
    getChoiceResponseSchema,
    getChoicesResponseSchema,
    getChoiceSchema,
  },
  { $id: "choiceSchema" }
);
