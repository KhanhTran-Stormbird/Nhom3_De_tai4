# Base image for frontend
FROM oven/bun:1.2.3-alpine
WORKDIR /app

# Copy files and install dependencies using Bun
COPY package.json bun.lock ./
RUN bun install

# Copy all source code
COPY . .

# Expose port
EXPOSE 4000

# Start Vite using Bun
CMD ["bun", "run", "dev"]
