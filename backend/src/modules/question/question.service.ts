import prisma from "../../utils/prisma";

import {
  CreateQuestionInput,
  DeleteQuestionInput,
  EditQuestionInput,
} from "./question.schema";
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

export async function deleteQuestion(
  data: DeleteQuestionInput & { creatorId: string }
) {
  return prisma.questions.delete({
    where: {
      questionId: data.questionId,
      relatedForm: {
        creatorId: data.creatorId,
      },
    },
  });
}
