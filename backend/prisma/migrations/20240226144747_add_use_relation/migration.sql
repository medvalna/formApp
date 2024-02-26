-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
