-- AlterTable
ALTER TABLE "InnersubCategories" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "last_editedBy" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3);
