FROM postgres:latest

ENV POSTGRES_USER ${DB_USR}
ENV POSTGRES_UPASSWORD ${DB_PWD}
ENV POSTGRES_DB ${DB_NAME}

COPY init.sql /docker-entrypoint-initdb.d/