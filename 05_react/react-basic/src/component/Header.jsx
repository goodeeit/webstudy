import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      {/*
        react에서 사용하는 a 태그
        <Link to="경로"></Link>
      */}
      <Link to="/">Home</Link>
      <Link to="/ex01">Ex01</Link>
      <Link to="/ex03">Ex03</Link>
      <Link to="/ex04">Ex04</Link>
      <Link to="/ex05">Ex05</Link>
      <Link to="/ex06">Ex06</Link>
    </div>
  );
};

export default Header;