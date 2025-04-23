-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "posterImageUrl" JSONB NOT NULL,
    "last_editedBy" TEXT,
    "short_description" TEXT,
    "custom_url" TEXT NOT NULL,
    "Banners" JSONB,
    "BannerText" TEXT,
    "BannerHeading" TEXT,
    "RecallUrl" TEXT,
    "breadCrum" TEXT,
    "topHeading" TEXT,
    "topDescription" TEXT,
    "categoryHeroImages" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "categoryHeroToptext" TEXT,
    "categoryHeroHeading" TEXT,
    "categoryHeroText" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "categoryFaqs" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "leftHeading" TEXT,
    "categoryText" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "Heading" TEXT,
    "paras" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "bottomText" TEXT,
    "bodyHeading" TEXT,
    "bodyMainHeading" TEXT,
    "bodyText" TEXT,
    "Bannerdiscount" TEXT,
    "salesBannerHeading" TEXT,
    "paraText" TEXT,
    "Bannercounter" TIMESTAMP(3),
    "Canonical_Tag" TEXT,
    "Meta_Description" TEXT,
    "Meta_Title" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admins" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "canAddProduct" BOOLEAN NOT NULL DEFAULT false,
    "canEditProduct" BOOLEAN NOT NULL DEFAULT false,
    "canDeleteProduct" BOOLEAN NOT NULL DEFAULT false,
    "canAddCategory" BOOLEAN NOT NULL DEFAULT false,
    "canDeleteCategory" BOOLEAN NOT NULL DEFAULT false,
    "canEditCategory" BOOLEAN NOT NULL DEFAULT false,
    "canCheckProfit" BOOLEAN NOT NULL DEFAULT false,
    "canCheckRevenue" BOOLEAN NOT NULL DEFAULT false,
    "canCheckVisitors" BOOLEAN NOT NULL DEFAULT false,
    "canViewUsers" BOOLEAN NOT NULL DEFAULT false,
    "canViewSales" BOOLEAN NOT NULL DEFAULT false,
    "canVeiwAdmins" BOOLEAN NOT NULL DEFAULT false,
    "canVeiwTotalproducts" BOOLEAN NOT NULL DEFAULT false,
    "canVeiwTotalCategories" BOOLEAN NOT NULL DEFAULT false,
    "posterImageUrl" JSONB,
    "role" TEXT NOT NULL DEFAULT 'Admin',

    CONSTRAINT "Admins_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Admins_email_key" ON "Admins"("email");
