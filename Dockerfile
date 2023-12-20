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
# FROM nginx:1.19.0

# ... previous Dockerfile steps

# Use the nginx image for serving the content
FROM nginx:1.19.0

# Set the environment variable for PORT
ENV PORT 8080

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Copy the build output from the previous stage into the nginx directory
COPY --from=build /app/dist/bedandbreakfast-marua /usr/share/nginx/html

# Expose the port
EXPOSE $PORT

# Replace the PORT in nginx config and start nginx
# CMD /bin/bash -c "envsubst < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"
CMD /bin/bash -c "envsubst < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"

