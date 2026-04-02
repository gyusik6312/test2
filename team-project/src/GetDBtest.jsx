import { useEffect, useState } from "react";

function GetDBtest() {
  const [students, setStudents] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/api/student")
    .then(res => res.json())
    .then(data => {
      console.log("받아온 데이터:", data);  // 여기 출력 확인
      setStudents(data);
    })
    .catch(err => console.error("fetch 에러:", err));
}, []);

  return (
    <div>
      <h1>학생 목록</h1>
      {students.length === 0 ? (
        <p>데이터 로딩 중...</p>
      ) : (
        <ul>
          {students.map(s => (
            <li key={s.id}>
              {s.id} - {s.name} - {s.major} - {s.year}학년
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GetDBtest;