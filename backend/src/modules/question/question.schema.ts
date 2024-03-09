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

const questionsResponseSchema = z.array(questionResponseSchema);
export type CreateQuestionInput = z.infer<typeof createQuestionSchema>;
export type EditQuestionInput = z.infer<typeof editQuestionSchema>;

export const { schemas: questionSchemas, $ref } = buildJsonSchemas(
  {
    createQuestionSchema,
    questionResponseSchema,
    questionsResponseSchema,
    editQuestionSchema,
  },
  { $id: "questionSchema" }
);
