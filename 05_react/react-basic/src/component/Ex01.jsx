import { people, person } from "../data/person";
import Ex02 from "./Ex02";

const Ex01 = () => {

  return (
    <div className="ex01">
      <h1>Ex01</h1>
      {/* 객체 */}
      <div>{person.name}, {person.age}</div>
      {/* 배열 */}
      {people.map((p) => (
        <div>{p.name}, {p.age}</div>
      ))}
      {/* Ex02 컴포넌트로 person 객체 전달하기 */}
      <Ex02 per={person} />
      {/* Ex02 컴포넌트로 people 배열 전달하기 */}
      {people.map(p => (
        <Ex02 per={p} />
      ))}
    </div>
  );

}

export default Ex01;