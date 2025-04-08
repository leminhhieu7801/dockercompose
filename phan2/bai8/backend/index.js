const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3002;

// Tạo kết nối với MySQL
const connection = mysql.createConnection({
  host: 'mysql', // Tên service trong docker-compose
  port: 3307,       
  user: 'root',
  password: 'example',
  database: 'testdb'
});

// Kiểm tra kết nối
connection.connect(err => {
  if (err) {
    console.error('Lỗi kết nối:', err);
    return;
  }
  console.log('Kết nối MySQL thành công!');
});

app.get('/', (req, res) => {
  connection.query('SELECT NOW()', (err, results) => {
    if (err) return res.status(500).send(err.toString());
    res.send(`Giờ hệ thống từ MySQL: ${results[0]['NOW()']}`);
  });
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
