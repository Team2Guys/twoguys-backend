-- CreateTable
CREATE TABLE "Redirecturls" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "redirectedUrl" TEXT NOT NULL,

    CONSTRAINT "Redirecturls_pkey" PRIMARY KEY ("id")
);
