FROM node:24-alpine3.22 AS base
COPY ./package.json /app/package.json
COPY ./pnpm* /app
WORKDIR /app
RUN corepack enable pnpm
#RUN pnpm install --frozen-lockfile --prefer-offline
USER node
COPY --chown=node:node . /app

ENTRYPOINT ["pnpm", "run", "dev","--host"]

