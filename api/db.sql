-- Table: public.productinfo
-- DROP TABLE IF EXISTS public.productinfo;
DROP DATABASE shopping;

CREATE DATABASE shopping;

\c shopping;

CREATE TABLE IF NOT EXISTS "products" (
    "id" text,
    "category" text,
    "image_path_one" text,
    "image_path_two" text,
    "image_path_three" text,
    "status" text,
    "name" text,
    "simple_description" text,
    "detailed_description" text,
    "color" text,
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