import prisma from "../../utils/prisma";
import { CreateOptionInput, EditOptionInput } from "./options.schema";

export async function createOption(data: CreateOptionInput) {
  return prisma.options.create({
    data,
  });
}

export async function getOptions(data: { relatedQuestionId: string }) {
  return prisma.options.findMany({
    where: {
      relatedQuestionId: data.relatedQuestionId,
    },
    select: {
      text: true,
      optionId: true,
    },
  });
}

export async function editOptions(data: EditOptionInput) {
  return prisma.options.update({
    where: {
      optionId: data.optionId,
    },
    data: {
      text: data.text,
    },
  });
}
export async function deleteOptions(data: DeleteOption) {
  return prisma.options.delete({
    where: {
      optionId: data.optionId,
    },
  });
}
