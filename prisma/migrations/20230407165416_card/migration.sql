/*
  Warnings:

  - Added the required column `instagramURL` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `site` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `twitterURL` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsappURL` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "instagramURL" TEXT NOT NULL,
ADD COLUMN     "site" TEXT NOT NULL,
ADD COLUMN     "twitterURL" TEXT NOT NULL,
ADD COLUMN     "whatsappURL" TEXT NOT NULL;
