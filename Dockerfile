# Use base node image
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package Json file &  install dependencies
COPY package.json ./
RUN npm install

# Copy rest of the app code
COPY . .

# Build
RUN npm run build

# Serve static files with nginx
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html

# Expose the api port
EXPOSE 80

# Run the app
CMD ["nginx", "-g", "daemon off;"]