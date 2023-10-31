import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Ex06 = () => {

  // 2개의 state 변수 선언
  const [name, setName] = useState();  // state 변수 name의 초기화는 없다
  const [age, setAge] = useState();    // state 변수 age의 초기화는 없다

  return (
    <div className="ex06">
      <input type="text" name="name" placeholder="이름입력" onChange={(ev) => { setName(ev.target.value) }} />
      <input type="text" name="age" placeholder="나이입력" onChange={(ev) => setAge(ev.target.value)} />
      <Link to={{
        pathname: `/pathvariable/name/${name}/age/${age}`
      }}><button type="button">전송1</button></Link>
      <Link to={{
        pathname: '/querystring',
        search: `?name=${name}&age=${age}`
      }}><button type="button">전송2</button></Link>
    </div>
  );

};

export default Ex06;