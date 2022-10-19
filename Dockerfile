FROM node:16-alpine3.16 AS main
WORKDIR /app

FROM main AS builder
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn --frozen-lockfile
COPY . .
COPY .env /app/.env-production
RUN yarn build

FROM main AS runner
COPY --from=builder /app/package.json /app/
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/public /app/public
COPY --from=builder /app/.next /app/.next
CMD ["yarn", "start"]
