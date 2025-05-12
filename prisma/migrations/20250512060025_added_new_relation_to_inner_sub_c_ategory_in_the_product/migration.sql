-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "innersubCategoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_innersubCategoryId_fkey" FOREIGN KEY ("innersubCategoryId") REFERENCES "InnersubCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
