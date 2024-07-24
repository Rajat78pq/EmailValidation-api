-- CreateTable
CREATE TABLE "adminLogin" (
    "Id" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "adminLogin_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "adminLogin_Email_key" ON "adminLogin"("Email");
