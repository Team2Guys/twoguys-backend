-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "seoSchema" TEXT;

-- AlterTable
ALTER TABLE "subCategories" ADD COLUMN     "breadCrum" TEXT,
ADD COLUMN     "seoSchema" TEXT;

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "discountPrice" INTEGER,
    "posterImageUrl" JSONB NOT NULL,
    "hoverImageUrl" JSONB,
    "productImages" JSONB[],
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "Canonical_Tag" TEXT,
    "Meta_Description" TEXT,
    "Meta_Title" TEXT,
    "last_editedBy" TEXT,
    "custom_url" TEXT NOT NULL,
    "breadCrum" TEXT,
    "Banners" JSONB,
    "BannerText" TEXT,
    "BannerHeading" TEXT,
    "salesBannerImage" JSONB,
    "categoryHeroImages" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "categoryHeroToptext" TEXT,
    "categoryHeroHeading" TEXT,
    "categoryHeroText" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "categoryFaqs" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "right_side_Heading" TEXT,
    "left_side_Text" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "left_side_image" JSONB,
    "Product_Section_heading" TEXT,
    "bottomText" TEXT,
    "explore_Heading" TEXT,
    "explore_main_heading" TEXT,
    "explore_description" TEXT,
    "professionalServiceImage" JSONB,
    "categoryId" INTEGER,
    "subCategoryId" INTEGER,
    "seoSchema" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "subCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
