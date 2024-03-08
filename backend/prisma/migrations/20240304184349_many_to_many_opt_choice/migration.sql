/*
  Warnings:

  - You are about to drop the column `relatedOptionId` on the `Choice` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_relatedOptionId_fkey";

-- AlterTable
ALTER TABLE "Choice" DROP COLUMN "relatedOptionId";

-- CreateTable
CREATE TABLE "ChoicesOnOptions" (
    "choiceId" TEXT NOT NULL,
    "optionId" TEXT NOT NULL,

    CONSTRAINT "ChoicesOnOptions_pkey" PRIMARY KEY ("choiceId","optionId")
);

-- AddForeignKey
ALTER TABLE "ChoicesOnOptions" ADD CONSTRAINT "ChoicesOnOptions_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "Choice"("choiceId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChoicesOnOptions" ADD CONSTRAINT "ChoicesOnOptions_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Options"("optionId") ON DELETE RESTRICT ON UPDATE CASCADE;
