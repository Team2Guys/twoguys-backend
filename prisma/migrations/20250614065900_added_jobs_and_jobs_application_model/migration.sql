-- CreateTable
CREATE TABLE "Jobs" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "custom_url" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "isFilled" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT NOT NULL,
    "responsibilities" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "requirements" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "benefits" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "apply" JSONB[] DEFAULT ARRAY[]::JSONB[],

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobApplication" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "currentCTC" TEXT NOT NULL,
    "expectedCTC" TEXT NOT NULL,
    "noticePeriod" TEXT NOT NULL,
    "resume" JSONB NOT NULL,
    "portfolioLink" TEXT,

    CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Jobs_title_key" ON "Jobs"("title");
