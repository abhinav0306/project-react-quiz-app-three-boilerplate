import React from 'react';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';
import {Routes,Route} from "react-router-dom"
import "./App.css"
// import ResultComponent from "./components/ResultComponent";
function App() {
  return (
    <div className="App">
       <Routes>
      <Route exact path="/" element={<HomeComponent/>}/>
      <Route path="/quiz" element={ <QuizComponent/>}/>
      <Route path="/result" element={<ResultComponent/>}/>
    </Routes>
    </div>
  );
}

export default App;