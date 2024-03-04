import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const choiceInput = {
  relatedAnswerId: z.string(),
  relatedQuestionId: z.string(),
  relatedOptionId: z.string().optional(),
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

export type CreateChoiceInput = z.infer<typeof createChoiceSchema>;

export const { schemas: choiceSchemas, $ref } = buildJsonSchemas(
  {
    createChoiceSchema,
    choiceResponseSchema,
    choicesResponseSchema,
  },
  { $id: "choiceSchema" }
);
