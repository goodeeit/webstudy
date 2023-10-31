import React from 'react';
import { Link } from 'react-router-dom';
import { people } from '../data/person';

const Ex04 = () => {
  return (
    <div className="ex04">
      <h1>Ex04</h1>
      <br/>

      <h4>Query String</h4>
      <Link to={{
        pathname: '/querystring',
        search: '?name=홍길동&age=30'
      }}>링크1</Link>

      <br/>

      {people.map((p, index) => (
        <Link to={{
          pathname: '/querystring',
          search: `?name=${p.name}&age=${p.age}`
        }}>링크{index + 2}</Link>
      ))}

    </div>
  );
};

export default Ex04;