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
const getAnswerSchema = z.object({
  formId: z.string(),
});
const getAnswerResponseSchema = z.object({
  responderId: z.string(),
  answerId: z.string(),
  choices: z
    .object({
      relatedQuestionId: z.string(),
      options: z
        .object({
          option: z.object({
            optionId: z.string(),
            text: z.string(),
          }),
        })
        .array(),
    })
    .array(),
});
const deleteAnswerSchema = z.object({
  answerId: z.string(),
});
const getAnswersResponseSchema = z.array(getAnswerResponseSchema);
export type CreateAnswerInput = z.infer<typeof createAnswerSchema>;
export type GetAnswerInput = z.infer<typeof getAnswerSchema>;
export type DeleteAnswer = z.infer<typeof deleteAnswerSchema>;
export const { schemas: answerSchemas, $ref } = buildJsonSchemas(
  {
    createAnswerSchema,
    answerResponseSchema,
    answersResponseSchema,
    getAnswerResponseSchema,
    getAnswersResponseSchema,
    getAnswerSchema,
    deleteAnswerSchema,
  },
  { $id: "answerSchema" }
);
