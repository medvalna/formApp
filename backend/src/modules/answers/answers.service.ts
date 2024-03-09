import prisma from "../../utils/prisma";
import { CreateAnswerInput } from "./answers.schema";

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
