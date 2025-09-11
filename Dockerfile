# Stage 1 — Builder
FROM node:trixie AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install express dotenv --save
COPY . .

# Stage 2 — Runtime
FROM node:trixie-slim

WORKDIR /app
COPY --from=builder /app .

EXPOSE 4000
CMD ["npm", "start"]

