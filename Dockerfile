#FROM nginx:1.25.2-alpine3.18-slim
FROM jelastic/nginxbalancer:1.24.0

COPY . /usr/share/nginx/html/
COPY nginx-jelastic.conf /etc/nginx/nginx-jelastic.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]