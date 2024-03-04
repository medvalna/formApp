-- CreateTable
CREATE TABLE "Answers" (
    "answerId" TEXT NOT NULL,
    "connectedFormId" TEXT NOT NULL,
    "questionIds" TEXT[],
    "choicesIds" TEXT[],
    "responderId" TEXT,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("answerId")
);

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_connectedFormId_fkey" FOREIGN KEY ("connectedFormId") REFERENCES "Form"("formId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_responderId_fkey" FOREIGN KEY ("responderId") REFERENCES "Users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
