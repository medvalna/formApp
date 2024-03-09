import prisma from "../../utils/prisma";
import { CreateAnswerInput, DeleteAnswer } from "./answers.schema";

export async function createAnswer(
  data: CreateAnswerInput & { responderId: string }
) {
  return prisma.answer.create({
    data,
  });
}
export async function getAnswers(data: {
  responderId: string;
  formId: string;
}) {
  return prisma.answer.findMany({
    where: {
      relatedFormId: data.formId,
    },
    select: {
      answerId: true,
      responderId: true,
      choices: {
        select: {
          relatedQuestionId: true,
          options: {
            select: {
              option: {
                select: {
                  optionId: true,
                  text: true,
                },
              },
            },
          },
          input: true,
          choiceId: true,
        },
      },
    },
  });
}

export async function deleteAnswer(
  data: DeleteAnswer & { responderId: string }
) {
  await prisma.choicesOnOptions.deleteMany({
    where: {
      choice: {
        relatedAnswerId: data.answerId,
      },
    },
  });
  await prisma.choice.deleteMany({
    where: {
      relatedAnswerId: data.answerId,
    },
  });
  await prisma.answer.delete({
    where: {
      answerId: data.answerId,
    },
  });
}
