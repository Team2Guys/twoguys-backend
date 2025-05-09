-- CreateTable
CREATE TABLE "InnersubCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "custom_url" TEXT NOT NULL,
    "subCategoryId" INTEGER,

    CONSTRAINT "InnersubCategories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InnersubCategories" ADD CONSTRAINT "InnersubCategories_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "subCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
