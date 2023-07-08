# Use the official Node.js 18.x image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining application code
COPY . .

# Build the Next.js application
RUN npm run build

# Set the command to start the application
CMD ["npm", "start"]

