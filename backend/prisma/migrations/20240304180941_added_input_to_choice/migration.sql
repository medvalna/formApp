-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_relatedOptionId_fkey";

-- AlterTable
ALTER TABLE "Choice" ADD COLUMN     "input" TEXT,
ALTER COLUMN "relatedOptionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_relatedOptionId_fkey" FOREIGN KEY ("relatedOptionId") REFERENCES "Options"("optionId") ON DELETE SET NULL ON UPDATE CASCADE;
