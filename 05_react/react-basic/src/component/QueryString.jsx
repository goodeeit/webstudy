import React from 'react';
import { useSearchParams } from 'react-router-dom';

const QueryString = () => {

  // Query String 형식으로 넘어오는 파라미터를 받는 함수 : useSearchParams()

  // querystring?name=홍길동&age=30

  const [params] = useSearchParams();
  console.log(params);

  const name = params.get('name');
  const age = params.get('age');

  const arr = [...params];  // ... 전개 연산자를 이용해서 배열 arr 생성
  console.log(arr);

  return (
    <div className="query-string">
      <h1>Query String</h1>
      <h4>이름 : {name}</h4>
      <h4>나이 : {age}</h4>
      <br/>
      {arr.map(param => (
        <div>{param[0]}: {param[1]}</div>
      ))}
    </div>
  );

};

export default QueryString;