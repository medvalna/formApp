import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const singleChoiceInput = {
  relatedAnswerId: z.string(),
  relatedQuestionId: z.string(),
  relatedOptionId: z.string().optional(),
  //input: z.string().optional(),
};

const choiceGenerated = {
  choiceId: z.string(),
};

const createSingleChoiceSchema = z.object({
  ...singleChoiceInput,
});
const choiceResponseSchema = z.object({
  ...singleChoiceInput,
  ...choiceGenerated,
});

const choicesResponseSchema = z.array(choiceResponseSchema);

export type CreateSingleChoiceInput = z.infer<typeof createSingleChoiceSchema>;

export const { schemas: choiceSchemas, $ref } = buildJsonSchemas(
  {
    createSingleChoiceSchema: createSingleChoiceSchema,
    choiceResponseSchema,
    choicesResponseSchema,
  },
  { $id: "choiceSchema" }
);
