import React, { useState } from "react";

const Compoent3 = () => {
  const [add, setAddresses] = useState([
    { id: 1, name: "홍길동", addresses: "인천 미추홀구" },
    { id: 2, name: "익명2", addresses: "구구구" },
    { id: 3, name: "익명3", addresses: "무무무" },
  ]);
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>이름</td>
          <td>주소</td>
        </tr>
      </thead>
      <tbody>
        {add.map((add) => (
          <tr>
            <td>{add.id}</td>
            <td>{add.name}</td>
            <td>{add.addresses}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Compoent3;
