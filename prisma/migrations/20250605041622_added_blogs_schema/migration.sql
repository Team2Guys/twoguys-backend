-- CreateEnum
CREATE TYPE "BlogStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateTable
CREATE TABLE "blogs" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "posterImage" JSONB,
    "last_editedBy" TEXT,
    "Canonical_Tag" TEXT,
    "Meta_Description" TEXT,
    "Meta_Title" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "redirectionUrl" TEXT DEFAULT '',
    "publishedAt" TIMESTAMP(3),
    "status" "BlogStatus" NOT NULL DEFAULT 'PUBLISHED',

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blogs_comments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "replies" JSONB[],
    "blogId" INTEGER NOT NULL,
    "status" "CommentStatus" NOT NULL DEFAULT 'PENDING',
    "last_editedBy" TEXT,

    CONSTRAINT "blogs_comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "blogs_comments" ADD CONSTRAINT "blogs_comments_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blogs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
