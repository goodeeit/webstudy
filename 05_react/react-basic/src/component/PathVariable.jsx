import React from 'react';
import { useParams } from 'react-router-dom';

const PathVariable = () => {

  // path variable을 받는 함수 : useParams()

  // 구조 분해
  const { name, age } = useParams();

  return (
    <div className="path-variable">
      <h1>Path Variable</h1>
      <h4>이름 : {name}</h4>
      <h4>나이 : {age}</h4>
    </div>
  );

};

export default PathVariable;