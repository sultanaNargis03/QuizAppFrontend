import AddQuestion from "./questioncomponents/AddQuestion";
import QuestionList from "./questioncomponents/QuestionList";
import EditQuestion from "./questioncomponents/EditQuestion";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateQuiz from "./quizComponent/CreateQuiz";
import QuizList from "./quizComponent/QuizList";
import Menu from "./Menu";
import FetchQuiz from "./quizComponent/FetchQuiz";

import Home from "./Home";
function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/quizlist" element={<QuizList />} exact />
          <Route path="/addQuiz" element={<CreateQuiz />} exact />
          <Route path="/fetchquiz/:id" element={<FetchQuiz />} />
          <Route path="questionlist/" element={<QuestionList />} exact />
          <Route path="/addQuestion" element={<AddQuestion />} />
          <Route path="/edit/:id" element={<EditQuestion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
