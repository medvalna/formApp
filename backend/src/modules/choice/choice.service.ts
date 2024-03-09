import prisma from "../../utils/prisma";
import { CreateSingleChoiceInput, DeleteChoice } from "./choice.schema";

export async function createSingleChoice(data: CreateSingleChoiceInput) {
  const options = [];
  if (data.options) {
    for (let i = 0; i < data.options!.length; i++) {
      options.push({ optionId: data.options![i] });
    }
  }

  return prisma.choice.create({
    data: {
      relatedAnswerId: data.relatedAnswerId,
      relatedQuestionId: data.relatedQuestionId,
      options: {
        createMany: {
          data: options,
        },
      },
      input: data.input,
    },
  });
}

export async function getChoice(data: { relatedAnswerId: string }) {
  return prisma.choice.findMany({
    where: {
      relatedAnswerId: data.relatedAnswerId,
    },
    select: {
      choiceId: true,
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
    },
  });
}

export async function deleteChoice(data: DeleteChoice) {
  return prisma.choice.deleteMany({
    where: {
      choiceId: data.choiceId,
    },
  });
}
