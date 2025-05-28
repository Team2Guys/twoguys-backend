-- CreateEnum
CREATE TYPE "CommentStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "ProductReviews" (
    "id" SERIAL NOT NULL,
    "posterImageUrl" JSONB,
    "name" TEXT NOT NULL,
    "starRating" INTEGER,
    "ReviewsDescription" TEXT NOT NULL,
    "reviewDate" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "productsImage" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "productId" INTEGER,
    "status" "CommentStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "ProductReviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductQuestions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "productId" INTEGER,
    "status" "CommentStatus" NOT NULL DEFAULT 'PENDING',
    "replies" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "ProductQuestions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductReviews" ADD CONSTRAINT "ProductReviews_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductQuestions" ADD CONSTRAINT "ProductQuestions_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
