-- CreateTable
CREATE TABLE "Answer" (
    "answerId" TEXT NOT NULL,
    "responderId" TEXT,
    "relatedFormId" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("answerId")
);

-- CreateTable
CREATE TABLE "Choice" (
    "choiceId" TEXT NOT NULL,
    "relatedAnswerId" TEXT NOT NULL,
    "relatedQuestionId" TEXT NOT NULL,
    "relatedOptionId" TEXT NOT NULL,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("choiceId")
);

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_responderId_fkey" FOREIGN KEY ("responderId") REFERENCES "Users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_relatedFormId_fkey" FOREIGN KEY ("relatedFormId") REFERENCES "Form"("formId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_relatedAnswerId_fkey" FOREIGN KEY ("relatedAnswerId") REFERENCES "Answer"("answerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_relatedQuestionId_fkey" FOREIGN KEY ("relatedQuestionId") REFERENCES "Questions"("questionId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_relatedOptionId_fkey" FOREIGN KEY ("relatedOptionId") REFERENCES "Options"("optionId") ON DELETE RESTRICT ON UPDATE CASCADE;
