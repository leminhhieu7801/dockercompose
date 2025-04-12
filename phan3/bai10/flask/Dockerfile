# Sử dụng image Python chính thức
FROM python:3.9-slim

# Cài đặt Flask
RUN pip install --no-cache-dir flask

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy mã nguồn Flask vào container
COPY . /app

# Mở port 5000 cho Flask
EXPOSE 5000

# Lệnh chạy Flask app
CMD ["python", "app.py"]
