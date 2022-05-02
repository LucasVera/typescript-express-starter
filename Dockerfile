# FROM node:18
FROM node:18-alpine

# Set env as production
ENV NODE_ENV=production
ENV PORT=8080

# Create app directory
WORKDIR /usr/src/app

# Copy only prod-ready code
# CI system should run npm run build beforehand
COPY ["dist", "."]

EXPOSE 8080
CMD [ "node", "index.js" ]
