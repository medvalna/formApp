import prisma from "../../utils/prisma";

import { CreateQuestionInput } from "./question.schema";
export async function createQuestion(
  data: CreateQuestionInput & { creatorId: string }
) {
  const { title, type, isRequired, relatedFormId } = data;
  return prisma.questions.create({
    data: {
      title: title,
      type: type,
      isRequired: isRequired,
      relatedFormId: relatedFormId,
    },
  });
}
