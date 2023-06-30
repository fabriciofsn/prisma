/*
  Warnings:

  - You are about to drop the column `userID` on the `Produto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_userID_fkey";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "userID";
