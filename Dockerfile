# Stage 1 — Builder
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install express dotenv --save
COPY . .

# Stage 2 — Runtime
FROM node:18-slim

WORKDIR /app
COPY --from=builder /app .

EXPOSE 4000
CMD ["npm", "start"]

