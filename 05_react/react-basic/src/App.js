import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Ex01 from './component/Ex01';
import Ex03 from './component/Ex03';
import Header from './component/Header';
import Footer from './component/Footer';
import PathVariable from './component/PathVariable';
import QueryString from './component/QueryString';
import Ex04 from './component/Ex04';
import Ex05 from './component/Ex05';
import Ex06 from './component/Ex06';

function App() {

  return (

    <div className="App">

      {/* MyFirstComponent 포함하기 */}
      {/* <MyFirstComponent /> */}

      {/* <Ex01 /> */}

      {/* 경로에 따른 컴포넌트 실행(react-router-dom 설치 필요 : npm install react-router-dom) */}
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/"     element={<Home />} />
          <Route path="/ex01" element={<Ex01 />} />
          <Route path="/ex03" element={<Ex03 />} />
          <Route path="/ex04" element={<Ex04 />} />
          <Route path="/ex05" element={<Ex05 />} />
          <Route path="/ex06" element={<Ex06 />} />
          <Route path="/pathvariable/name/:name/age/:age" element={<PathVariable />} />
          <Route path="/querystring" element={<QueryString />} />
        </Routes>

      </BrowserRouter>
      
      <Footer />

    </div>

  );
  
}

export default App;
