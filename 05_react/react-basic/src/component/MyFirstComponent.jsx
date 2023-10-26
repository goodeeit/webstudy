/*
  Component
  1. 화면 구성의 기본 단위
  2. 함수형 컴포넌트를 주로 사용(함수형, 클래스형)
*/

import React from "react";

/*
  jsx
  1. 자바스크립트 확장 문법
  2. 자바스크립트 코드 간결화 가능
*/
const MyFirstComponent = () => {

  // 여기는 js 영역이다.

  // 변수 선언
  const name = '홍길동';

  // 인라인 스타일
  const css = {
    color: 'orange',
    backgroundColor: 'crimson'
  };

  return (
    <div className="my-first-component">
      <h1>MyFirstComponent</h1>
      {/* 주석 */}
      <h4>jsx 이전의 문법</h4>
      {React.createElement('div', null, `${name}님 반갑습니다.`)}
      <h4>jsx 문법</h4>
      <div style={css}>{name}님 반갑습니다.</div>
    </div>
  );

}

export default MyFirstComponent;