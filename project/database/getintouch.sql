-- Table: public.getintouch

-- DROP TABLE IF EXISTS public.getintouch;

CREATE TABLE IF NOT EXISTS public.getintouch
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "First_name" text COLLATE pg_catalog."default" ,
    "Last_name" text COLLATE pg_catalog."default",
    "Email" text COLLATE pg_catalog."default",
    phone double precision,
    comment text COLLATE pg_catalog."default",
    "Address" text COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.getintouch
    OWNER to postgres;