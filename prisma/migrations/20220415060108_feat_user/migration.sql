-- CreateTable
CREATE TABLE "User" (
    "idx" SERIAL NOT NULL,
    "id" TEXT NOT NULL,
    "pw" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_idx_key" ON "User"("idx");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
