import prisma from "../../utils/prisma";
import {
  CreateFormInput,
  DeleteFormInput,
  UpdateFormInput,
} from "./forms.schema";

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

export async function deleteForm(
  data: DeleteFormInput & { creatorId: string }
) {
  //delete connected questions&options
  await prisma.options.deleteMany({
    where: {
      relatedQuestion: {
        relatedFormId: data.formId,
        relatedForm: { creatorId: data.creatorId },
      },
    },
  });
  await prisma.questions.deleteMany({
    where: {
      relatedFormId: data.formId,
      relatedForm: { creatorId: data.creatorId },
    },
  });

  return prisma.form.delete({
    where: {
      formId: data.formId,
      creatorId: data.creatorId,
    },
  });
}
