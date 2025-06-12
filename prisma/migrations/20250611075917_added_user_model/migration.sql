/*
  Warnings:

  - You are about to drop the column `isfreesample` on the `salesProducts` table. All the data in the column will be lost.
  - Added the required column `loginMethod` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "loginMethod" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "salesProducts" DROP COLUMN "isfreesample";
