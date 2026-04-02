const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

/* MySQL 연결 (Railway 정보 넣기) */
const db = mysql.createConnection({
  host: "ballast.proxy.rlwy.net", // Railway MYSQLHOST
  user: "root",                                // Railway MYSQLUSER
  password: "vZuYFVuKzxdHtuRfXonIxDvYaETPMcuw",                   // Railway MYSQLPASSWORD
  database: "railway",                         // Railway MYSQLDATABASE
  port: 45709                                   // Railway MYSQLPORT
});

/* DB 연결 확인 */
db.connect((err) => {
  if (err) {
    console.error("DB 연결 실패:", err);
    return;
  }
  console.log("MySQL connected");
});

/* 테스트용 기본 페이지 */
app.get("/", (req, res) => {
  res.send("Server is running");
});

/* 학생 목록 조회 API */
app.get("/api/student", (req, res) => {

  const sql = "SELECT * FROM student";

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
      res.status(500).send("DB error");
    } else {
      res.json(result);
    }

  });

});

/* 학생 추가 API */
app.post("/api/student", (req, res) => {

  const { id, name, major, year } = req.body;

  const sql = "INSERT INTO student (id, name, major, year) VALUES (?, ?, ?, ?)";

  db.query(sql, [id, name, major, year], (err, result) => {

    if (err) {
      console.log(err);
      res.status(500).send("Insert error");
    } else {
      res.json({ message: "학생 추가 성공" });
    }

  });

});

/* 서버 실행 */
app.listen(5000, () => {
  console.log("server running on 5000");
});