-- Table: public.newsoacustomer

-- DROP TABLE IF EXISTS public.newsoacustomer;

CREATE TABLE IF NOT EXISTS public.newsoacustomer
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    nameofthecustomer character varying(50) COLLATE pg_catalog."default",
    customercode integer,
    emailid "char"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.newsoacustomer
    OWNER to postgres;