/*
  Warnings:

  - You are about to drop the column `salesBannerImage` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "salesBannerImage";

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "salesBannerImage" JSONB;
