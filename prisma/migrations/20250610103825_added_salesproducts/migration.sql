-- CreateTable
CREATE TABLE "salesProducts" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "emirate" TEXT,
    "country" TEXT NOT NULL,
    "address" TEXT,
    "orderId" TEXT NOT NULL,
    "checkout" BOOLEAN NOT NULL DEFAULT false,
    "paymentStatus" BOOLEAN NOT NULL DEFAULT false,
    "isRefund" BOOLEAN NOT NULL DEFAULT false,
    "currency" TEXT,
    "transactionId" TEXT,
    "integrationId" TEXT,
    "amountCents" TEXT,
    "success" BOOLEAN NOT NULL DEFAULT false,
    "pending" BOOLEAN NOT NULL DEFAULT false,
    "is3DSecure" TEXT,
    "checkoutDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "transactionDate" TIMESTAMP(3),
    "shipmentFee" INTEGER,
    "deliveryStatus" BOOLEAN NOT NULL DEFAULT false,
    "cardLastDigits" TEXT,
    "products" JSONB[] DEFAULT ARRAY[]::JSONB[],
    "note" TEXT,
    "totalPrice" INTEGER NOT NULL,
    "pay_methodType" TEXT,
    "paymethod_sub_type" TEXT,
    "shippingMethod" JSONB,
    "otherCity" TEXT,
    "isfreesample" BOOLEAN,

    CONSTRAINT "salesProducts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "salesProducts_orderId_key" ON "salesProducts"("orderId");
