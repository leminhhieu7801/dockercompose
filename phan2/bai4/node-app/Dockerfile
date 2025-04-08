# Sử dụng Node.js phiên bản mới nhất
FROM node:latest

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json trước để cache dependencies
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ code vào container
COPY . .

# Mở cổng 3000
EXPOSE 3000

# Chạy ứng dụng
CMD ["node", "server.js"]
