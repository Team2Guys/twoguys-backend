-- AlterTable
ALTER TABLE "SocialLinks" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Appointments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "whatsApp" INTEGER,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "subCategories" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);
