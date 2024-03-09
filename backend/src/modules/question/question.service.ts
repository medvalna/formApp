import prisma from "../../utils/prisma";

import {
  CreateQuestionInput,
  DeleteQuestionInput,
  EditQuestionInput,
  GetQuestions,
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
  await prisma.options.deleteMany({
    where: {
      relatedQuestionId: data.questionId,
      relatedQuestion: {
        relatedForm: {
          creatorId: data.creatorId,
        },
      },
    },
  });
  return prisma.questions.delete({
    where: {
      questionId: data.questionId,
      relatedForm: {
        creatorId: data.creatorId,
      },
    },
  });
}

export async function getQuestions(data: /*GetQuestions &*/ {
  creatorId: string;
  relatedFormId: string;
}) {
  console.log("related", data.relatedFormId);
  return prisma.questions.findMany({
    where: {
      relatedFormId: data.relatedFormId,
      relatedForm: {
        creatorId: data.creatorId,
      },
    },
    select: {
      questionId: true,
      title: true,
      type: true,
      isRequired: true,
      options: {
        select: {
          optionId: true,
          text: true,
        },
      },
    },
  });
}
