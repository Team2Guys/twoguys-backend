-- CreateTable
CREATE TABLE "Reviews" (
    "id" SERIAL NOT NULL,
    "posterImageUrl" JSONB,
    "name" TEXT NOT NULL,
    "starRating" INTEGER,
    "ReviewsDescription" TEXT NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLinks" (
    "id" SERIAL NOT NULL,
    "posterImageUrl" JSONB NOT NULL,
    "post_links" TEXT NOT NULL,

    CONSTRAINT "SocialLinks_pkey" PRIMARY KEY ("id")
);
