-- AlterTable
ALTER TABLE "EcomereceProducts" ALTER COLUMN "status" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Jobs" ALTER COLUMN "status" DROP NOT NULL;

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "status" DROP NOT NULL;

-- AlterTable
ALTER TABLE "subCategories" ALTER COLUMN "status" DROP NOT NULL;
