FROM nginx:1.24-alpine3.17

COPY . /usr/share/nginx/html/

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]