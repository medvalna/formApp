import prisma from "../../utils/prisma";
import { CreateSingleChoiceInput } from "./choice.schema";

export async function createSingleChoice(data: CreateSingleChoiceInput) {
  return prisma.choice.create({
    data,
  });
}
