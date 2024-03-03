import { z } from "zod";
import { Type } from "@prisma/client";
import { buildJsonSchemas } from "fastify-zod";

const questionInput = {
  title: z.string(),
  type: z.nativeEnum(Type),
  isRequired: z.boolean(),
  // options: z.object({
  //   optionId: z.string(),
  //   text: z.string(),
  // }),
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
const questionsResponseSchema = z.array(questionResponseSchema);
export type CreateQuestionInput = z.infer<typeof createQuestionSchema>;

export const { schemas: questionSchemas, $ref } = buildJsonSchemas(
  {
    createQuestionSchema,
    questionResponseSchema,
    questionsResponseSchema,
  },
  { $id: "questionSchema" }
);
