import prisma from "../../utils/prisma";
import { CreateSingleChoiceInput } from "./choice.schema";

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
