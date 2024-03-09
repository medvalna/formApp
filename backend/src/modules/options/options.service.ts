import prisma from "../../utils/prisma";
import { CreateOptionInput } from "./options.schema";

export async function createOption(data: CreateOptionInput) {
  return prisma.options.create({
    data,
  });
}

export async function getOptions(data: { relatedQuestionId: string }) {
  console.log("rel", data.relatedQuestionId);
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
