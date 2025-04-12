# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY my-app/ .
RUN npm install && npm run build

# Serve stage
FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
