-- AlterTable
ALTER TABLE "EcomereceProducts" ADD COLUMN     "status" "BlogStatus" NOT NULL DEFAULT 'PUBLISHED';

-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "status" "BlogStatus" NOT NULL DEFAULT 'PUBLISHED';

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "status" "BlogStatus" NOT NULL DEFAULT 'PUBLISHED';

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "status" "BlogStatus" NOT NULL DEFAULT 'PUBLISHED';

-- AlterTable
ALTER TABLE "subCategories" ADD COLUMN     "status" "BlogStatus" NOT NULL DEFAULT 'PUBLISHED';
