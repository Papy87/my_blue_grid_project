# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the TypeScript application
RUN npm run build

# Expose the port specified in the .env file
ARG PORT
EXPOSE ${PORT}

# Command to run the app
CMD ["npm", "start"]
