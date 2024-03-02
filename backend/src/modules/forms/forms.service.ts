import prisma from "../../utils/prisma";
import { CreateFormInput, UpdateFormInput } from "./forms.schema";

export async function createForm(
  data: CreateFormInput & { creatorId: string }
) {
  return prisma.form.create({
    data,
  });
}

export async function getForms(data: { creatorId: string }) {
  return prisma.form.findMany({
    where: {
      creatorId: data.creatorId,
    },
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

export async function updateForm(
  data: UpdateFormInput & { creatorId: string }
) {
  return prisma.form.update({
    where: {
      formId: data.formId,
      creatorId: data.creatorId,
    },
    data,
  });
}
