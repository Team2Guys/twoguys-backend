-- AlterTable
ALTER TABLE "EcomereceProducts" ADD COLUMN     "shippingOptions" JSONB[] DEFAULT ARRAY[]::JSONB[];
