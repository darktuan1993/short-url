FROM node:16-alpine
# Thư mục làm việc
WORKDIR /usr/app
ENV TZ=Asia/Ho_Chi_Minh
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]