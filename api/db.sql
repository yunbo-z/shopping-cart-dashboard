-- Table: public.productinfo
-- DROP TABLE IF EXISTS public.productinfo;
DROP DATABASE shopping;

CREATE DATABASE shopping;

\c shopping;

CREATE TABLE IF NOT EXISTS "products" (
    "id" integer,
    "category" integer,
    "imagePathOne" text,
    "imagePathTwo" text,
    "imgPathThree" text,
    "status" text,
    "name" text,
    "functionintro" text,
    "colorintro" text,
    "intro" text,
    "price" NUMERIC(10, 2),
    "stock" integer,
    "created_at" timestamp with time zone,
    "modified_at" timestamp with time zone,
    PRIMARY KEY (id),
    UNIQUE (id)
);

CREATE TABLE IF NOT EXISTS "categories" (
    "id" integer,
    "category" text,
    "popularity" integer,
    PRIMARY KEY (id),
    UNIQUE (id)
);