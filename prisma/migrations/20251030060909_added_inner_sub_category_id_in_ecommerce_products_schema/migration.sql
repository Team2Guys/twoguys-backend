/*
  Warnings:

  - You are about to drop the column `innerSubCategoryId` on the `EcomereceProducts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EcomereceProducts" DROP COLUMN "innerSubCategoryId",
ADD COLUMN     "innersubCategoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "EcomereceProducts" ADD CONSTRAINT "EcomereceProducts_innersubCategoryId_fkey" FOREIGN KEY ("innersubCategoryId") REFERENCES "InnersubCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
