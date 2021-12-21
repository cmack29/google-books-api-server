/*
  Warnings:

  - You are about to drop the column `book` on the `Reading` table. All the data in the column will be lost.
  - Added the required column `authors` to the `Reading` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publisher` to the `Reading` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Reading` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reading" DROP COLUMN "book",
ADD COLUMN     "authors" TEXT NOT NULL,
ADD COLUMN     "publisher" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
