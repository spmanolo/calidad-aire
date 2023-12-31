FROM debian:12-slim

LABEL version="5.0.5" \
    maintainer="manolosan2001@correo.ugr.es"

RUN apt update && \
    apt install -y curl unzip && \
    useradd -ms /bin/bash bun

USER bun

WORKDIR /home/bun

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/home/bun/.bun/bin:${PATH}"

USER root

RUN apt remove curl unzip -y && \
    apt autoremove -y && \
    apt clean -y

USER bun

WORKDIR /app/

COPY package.json bun.lockb ./

RUN bun install

WORKDIR /app/test/

ENTRYPOINT ["bun", "run", "test"]