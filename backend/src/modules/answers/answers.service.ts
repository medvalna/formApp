import prisma from "../../utils/prisma";
import { CreateAnswerInput } from "./answers.schema";

export async function createAnswer(
  data: CreateAnswerInput & { responderId: string }
) {
  return prisma.answer.create({
    data,
  });
}
