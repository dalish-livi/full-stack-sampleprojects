-- Table: public.theater

-- DROP TABLE IF EXISTS public.theater;

CREATE TABLE IF NOT EXISTS public.theater
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 10 CACHE 1 ),
    moviename character varying(15) COLLATE pg_catalog."default",
    price integer
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.theater
    OWNER to postgres;