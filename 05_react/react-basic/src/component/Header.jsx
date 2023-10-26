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
    </div>
  );
};

export default Header;