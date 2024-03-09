import prisma from "../../utils/prisma";

import { CreateQuestionInput, EditQuestionInput } from "./question.schema";
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

export async function editQuestion(
  data: EditQuestionInput & { creatorId: string }
) {
  const { title, type, isRequired, questionId, creatorId } = data;
  return prisma.questions.update({
    where: {
      questionId: questionId,
      relatedForm: {
        creatorId: creatorId,
      },
    },
    data: {
      title: title,
      type: type,
      isRequired: isRequired,
    },
  });
}
