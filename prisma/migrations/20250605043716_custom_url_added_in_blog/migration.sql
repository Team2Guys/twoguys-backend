/*
  Warnings:

  - Added the required column `custom_url` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blogs" ADD COLUMN     "custom_url" TEXT NOT NULL;
