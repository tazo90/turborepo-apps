-- DropIndex
DROP INDEX "user_id_key";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");
