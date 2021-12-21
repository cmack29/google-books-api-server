/*
  Warnings:

  - The `authors` column on the `Reading` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Reading" DROP COLUMN "authors",
ADD COLUMN     "authors" TEXT[];
