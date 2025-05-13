-- AlterTable
ALTER TABLE "EcomereceProducts" ADD COLUMN     "categoryId" INTEGER,
ADD COLUMN     "subCategoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "EcomereceProducts" ADD CONSTRAINT "EcomereceProducts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EcomereceProducts" ADD CONSTRAINT "EcomereceProducts_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "subCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
