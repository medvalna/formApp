import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const answerInput = {
  relatedFormId: z.string(),
};

const answerGenerated = {
  answerId: z.string(),
};

const createAnswerSchema = z.object({
  ...answerInput,
});
const answerResponseSchema = z.object({
  ...answerInput,
  ...answerGenerated,
});

const answersResponseSchema = z.array(answerResponseSchema);

export type CreateAnswerInput = z.infer<typeof createAnswerSchema>;

export const { schemas: answerSchemas, $ref } = buildJsonSchemas(
  {
    createAnswerSchema,
    answerResponseSchema,
    answersResponseSchema,
  },
  { $id: "answerSchema" }
);
