/*
  Warnings:

  - You are about to drop the column `login` on the `Users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Users_login_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "login";
