body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background: #111;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav {
  background: #333;
  color: white;
  text-align: center;
  padding: 0.5rem;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

section {
  padding: 20px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product {
  border: 1px solid #ddd;
  padding: 10px;
  width: 200px;
  text-align: center;
}

footer {
  background: #f0f0f0;
  text-align: center;
  padding: 1rem;
  margin-top: 40px;
}

/* Form đặt dịch vụ */
.form-container {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}

.form-container input,
.form-container button {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.form-container button {
  background: #111;
  color: white;
  border: none;
  cursor: pointer;
}

/* Nút Zalo & Messenger */
.social-buttons {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
}

.social-buttons a {
  display: inline-block;
  padding: 10px 15px;
  background-color: #25d366;
  color: white;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: background 0.3s;
}

.social-buttons a.zalo {
  background-color: #0068ff;
}

.social-buttons a.messenger {
  background-color: #0084ff;
}

.social-buttons a:hover {
  opacity: 0.9;
}
function timSanPham() {
  const tuKhoa = document.getElementById("searchInput").value.trim();
  if (tuKhoa) {
    alert("Bạn vừa tìm: " + tuKhoa);
    // 📌 Sau này có thể dùng tuKhoa để lọc sản phẩm thật
  } else {
    alert("Vui lòng nhập tên sản phẩm cần tìm.");
  }
}
