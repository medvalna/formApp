-- CreateEnum
CREATE TYPE "Type" AS ENUM ('ONECHOICE', 'MULTICHOICE', 'INPUT');

-- CreateTable
CREATE TABLE "Users" (
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "login" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Form" (
    "formId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isAnonymous" BOOLEAN NOT NULL,
    "creatorId" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("formId")
);

-- CreateTable
CREATE TABLE "Questions" (
    "questionId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "isRequired" BOOLEAN NOT NULL,
    "relatedFormId" TEXT NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("questionId")
);

-- CreateTable
CREATE TABLE "Options" (
    "optionId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "relatedQuestionId" TEXT NOT NULL,

    CONSTRAINT "Options_pkey" PRIMARY KEY ("optionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_login_key" ON "Users"("login");

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_relatedFormId_fkey" FOREIGN KEY ("relatedFormId") REFERENCES "Form"("formId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Options" ADD CONSTRAINT "Options_relatedQuestionId_fkey" FOREIGN KEY ("relatedQuestionId") REFERENCES "Questions"("questionId") ON DELETE RESTRICT ON UPDATE CASCADE;
