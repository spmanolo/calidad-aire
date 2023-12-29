FROM debian:12-slim

LABEL version="5.0.2" \ 
    maintainer="manolosan2001@correo.ugr.es"

RUN apt update && \
    apt install -y curl unzip && \
    useradd -ms /bin/bash bun

USER bun

WORKDIR /home/bun

RUN curl -fsSL https://bun.sh/install | bash

ENV PATH="/home/bun/.bun/bin:${PATH}"

WORKDIR /app/test

COPY package.json ./ \
    bun.lockb ./

RUN bun install

ENTRYPOINT ["bun", "run", "test"]