import React from 'react';
import { Link } from 'react-router-dom';
import { person } from '../data/person';

const Ex03 = () => {
  return (
    <div className="ex03">

      <h1>Ex03</h1>
      <br/>

      <h4>Path Variable</h4>
      <Link to={{
        pathname: '/pathvariable/name/홍길동/age/30'
      }}>링크1</Link>
      <br/>
      <Link to={{
        pathname: `/pathvariable/name/${person.name}/age/${person.age}`
      }}>링크2</Link>

    </div>
  );
};

export default Ex03;