

# # Build the angular application
# FROM node:16 as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build


# # serve the angular app using Nginx
# FROM nginx:alpine
# COPY --from=build /app/dist/food-delivery-app /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx","-g","daemon off;"]



# Build the angular application
FROM node:16 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# RUN npm run build -- --configuration production
RUN npm run build


# serve the angular app using Nginx
FROM nginx:alpine
# COPY --from=build /app/dist/food-delivery-app /usr/share/nginx/html
COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]