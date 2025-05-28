-- DropForeignKey
ALTER TABLE "ProductQuestions" DROP CONSTRAINT "ProductQuestions_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductReviews" DROP CONSTRAINT "ProductReviews_productId_fkey";

-- AlterTable
ALTER TABLE "ProductQuestions" ADD COLUMN     "ecomereceProductsId" INTEGER;

-- AlterTable
ALTER TABLE "ProductReviews" ADD COLUMN     "ecomereceProductsId" INTEGER;

-- AddForeignKey
ALTER TABLE "ProductReviews" ADD CONSTRAINT "ProductReviews_ecomereceProductsId_fkey" FOREIGN KEY ("ecomereceProductsId") REFERENCES "EcomereceProducts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductQuestions" ADD CONSTRAINT "ProductQuestions_ecomereceProductsId_fkey" FOREIGN KEY ("ecomereceProductsId") REFERENCES "EcomereceProducts"("id") ON DELETE SET NULL ON UPDATE CASCADE;
