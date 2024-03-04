import prisma from "../../utils/prisma";
import { CreateAnswerInput } from "./answer.schema";

export async function createAnswer(
  data: CreateAnswerInput & { responderId: string }
) {
  return prisma.answers.create({
    data,
  });
}
