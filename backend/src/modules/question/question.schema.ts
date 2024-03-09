import { z } from "zod";
import { Type } from "@prisma/client";
import { buildJsonSchemas } from "fastify-zod";

const questionInput = {
  title: z.string(),
  type: z.nativeEnum(Type),
  isRequired: z.boolean(),
  relatedFormId: z.string(),
};

const questionGenerated = {
  questionId: z.string(),
};

const createQuestionSchema = z.object({
  ...questionInput,
});
const questionResponseSchema = z.object({
  ...questionInput,
  ...questionGenerated,
});

const editQuestionSchema = z.object({
  title: z.string(),
  type: z.nativeEnum(Type),
  isRequired: z.boolean(),
  ...questionGenerated,
});
const deleteQuestionSchema = z.object({
  ...questionGenerated,
});
const getQuestionsSchema = z.object({
  formId: z.string(),
});
const getQuestionResponseSchema = z.object({
  title: z.string(),
  type: z.nativeEnum(Type),
  isRequired: z.boolean(),
  questionId: z.string(),
  options: z
    .object({
      optionId: z.string(),
      text: z.string(),
    })
    .array(),
});
const getQuestionsResponseSchema = z.array(getQuestionResponseSchema);
const questionsResponseSchema = z.array(questionResponseSchema);
export type CreateQuestionInput = z.infer<typeof createQuestionSchema>;
export type EditQuestionInput = z.infer<typeof editQuestionSchema>;
export type DeleteQuestionInput = z.infer<typeof deleteQuestionSchema>;
export type GetQuestions = z.infer<typeof getQuestionsSchema>;
export const { schemas: questionSchemas, $ref } = buildJsonSchemas(
  {
    createQuestionSchema,
    questionResponseSchema,
    questionsResponseSchema,
    editQuestionSchema,
    deleteQuestionSchema,
    getQuestionsSchema,
    getQuestionResponseSchema,
    getQuestionsResponseSchema,
  },
  { $id: "questionSchema" }
);
