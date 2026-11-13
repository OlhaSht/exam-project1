CREATE TYPE "enum_Users_role" AS ENUM (
    'customer',
    'creator',
    'moderator'
);

CREATE TABLE "Users" (
    "id" SERIAL PRIMARY KEY,

    "firstName" VARCHAR(255) NOT NULL,
    "lastName"  VARCHAR(255) NOT NULL,
    "displayName"  VARCHAR(255) NOT NULL,
    "password"  VARCHAR(255) NOT NULL,
    "email"  VARCHAR(255) NOT NULL UNIQUE,
    "avatar"  VARCHAR(255) NOT NULL DEFAULT 'anon.png',
    "role" "enum_Users_role" NOT NULL,
    "balance" DECIMAL NOT NULL DEFAULT 0,
    "accessToken" TEXT,
    "rating" FLOAT NOT NULL DEFAULT 0,

    CONSTRAINT "Users_balance_check"
        CHECK ("balance" >= 0)
);

CREATE TABLE "Conversations" (
    "id" SERIAL PRIMARY KEY,

    "participants" INTEGER[] NOT NULL,
    "blackList" BOOLEAN[] NOT NULL,
    "favoriteList" BOOLEAN[] NOT NULL,
    
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE "Catalogs" (
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL,
    "catalogName" VARCHAR(255) NOT NULL,

    CONSTRAINT "Catalogs_userId_fkey"
        FOREIGN KEY ("userId")
        REFERENCES "Users" ("id")
);

CREATE TABLE "Messages" (
    "id" BIGSERIAL PRIMARY KEY,

    "sender" INTEGER NOT NULL
        REFERENCES "Users"("id")
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    "body" VARCHAR(2048) NOT NULL,

    "conversationId" INTEGER NOT NULL
        REFERENCES "Conversations"("id"),

    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW() ,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE "CatalogConversations" (
    "id" SERIAL PRIMARY KEY,

    "catalogId" INTEGER NOT NULL
        REFERENCES "Catalogs"("id")
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    "conversationId" INTEGER NOT NULL
        REFERENCES "Conversations"("id")
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL
        DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "unique_catalog_conversation_pair"
        UNIQUE ("catalogId", "conversationId")
);

CREATE TABLE "UserConversations" (
  "userId" INTEGER NOT NULL,
  "conversationId" INTEGER NOT NULL,
  "blackList" BOOLEAN NOT NULL DEFAULT FALSE,
  "favoriteList" BOOLEAN NOT NULL DEFAULT FALSE,
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,

  PRIMARY KEY ("userId", "conversationId"),

  FOREIGN KEY ("userId")
    REFERENCES "Users" ("id")
    ON UPDATE CASCADE
    ON DELETE CASCADE,

  FOREIGN KEY ("conversationId")
    REFERENCES "Conversations" ("id")
    ON UPDATE CASCADE
    ON DELETE CASCADE
);