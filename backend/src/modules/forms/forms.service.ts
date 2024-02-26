import prisma from "../../utils/prisma";
import { CreateFormInput } from "./forms.schema";

export async function createForm(
  data: CreateFormInput & { creatorId: string }
) {
  return prisma.form.create({
    data,
  });
}

export async function getForms() {
  return prisma.form.findMany({
    select: {
      title: true,
      isAnonymous: true,
      isPublished: true,
      creator: {
        select: {
          email: true,
          userId: true,
        },
      },
      formId: true,
    },
  });
}
