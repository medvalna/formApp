import prisma from "../../utils/prisma";
import { CreateChoiceInput } from "./choice.schema";

export async function createChoice(data: CreateChoiceInput) {
  return prisma.choice.create({
    data,
  });
}
