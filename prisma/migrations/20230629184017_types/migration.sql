/*
  Warnings:

  - You are about to alter the column `nome` on the `Produto` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(45)`.
  - You are about to alter the column `preco` on the `Produto` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Real`.

*/
-- AlterTable
ALTER TABLE "Produto" ALTER COLUMN "nome" SET DATA TYPE VARCHAR(45),
ALTER COLUMN "preco" SET DATA TYPE REAL;
