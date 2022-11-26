FROM postgres

ENV POSTGRES_DB=$POSTGRES_DB
ENV POSTGRES_USER=$POSTGRES_USER
ENV POSTGRES_PASSWORD=$POSTGRES_PASSWORD
ENV PGDATA=/data/postgres

VOLUME postgres /data/postgres
VOLUME ./postgres_init.sql /docker-entrypoint-initdb.d/init.sql

EXPOSE 5432
