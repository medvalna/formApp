import prisma from "../../utils/prisma";
import { CreateOptionInput } from "./options.schema";

export async function createOption(data: CreateOptionInput) {
  return prisma.options.create({
    data,
  });
}
