# Step 1: Use an official Node runtime as a parent image
FROM node:14 as build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Step 4: Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Step 5: Build the Angular app in production mode and store the artifacts in dist directory
RUN npm run build --prod 

# Step 6: Use Nginx to serve the static content
FROM nginx:1.19.0

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/bedandbreakfast-marua /usr/share/nginx/html

# Step 7: Expose port 80 to the outside once the container has launched
EXPOSE 80

# Step 8: Define the command to run your app using CMD which defines your runtime
CMD ["nginx", "-g", "daemon off;"]
