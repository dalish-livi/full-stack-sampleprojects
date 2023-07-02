-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "First_name" text COLLATE pg_catalog."default" NOT NULL,
    "Last_name" text COLLATE pg_catalog."default",
    "Email" text COLLATE pg_catalog."default" NOT NULL,
    phone double precision,
    comment text COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;