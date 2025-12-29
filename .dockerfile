# =========================
# 1️⃣ Build Stage
# =========================
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source
COPY . .

# Build Angular app (production)
RUN npm run build --configuration production


# =========================
# 2️⃣ Runtime Stage (Nginx)
# =========================
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Angular build output
COPY --from=build /app/dist/sample-angular-standalone /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
