import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./QuestionList.css";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9091/QuestionService/question/allquestions"
      );
      setQuestions(response.data);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };
  const deleteQuestion = async (id) => {
    try {
      await axios.delete(
        `http://localhost:9091/QuestionService/question/delete/${id}`
      );

      fetchQuestions();
    } catch (error) {
      console.error("Failed to delete question:", error);
    }
  };
  return (
    <div className="question-list">
      <h2>List of all Question</h2>
      <Link to="/addQuestion">Add New Question</Link>
      <div className="question-container">
        {questions.map((question) => (
          <div key={question.id} className="question-item">
            <div> Id: {question.id}</div>
            <div> Category: {question.category}</div>
            <div>Difficulty Level: {question.difficltyLevel}</div>
            <div>Question Title: {question.questionTitle}</div>
            <div>Option1: {question.option1}</div>
            <div>option2: {question.option2}</div>
            <div>option3: {question.option3}</div>
            <div>option4: {question.option4}</div>

            <div>Right Answer: {question.rightAnswer}</div>
            <button onClick={() => deleteQuestion(question.id)}>Delete</button>
            <Link to={`/edit/${question.id}`}>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionList;
