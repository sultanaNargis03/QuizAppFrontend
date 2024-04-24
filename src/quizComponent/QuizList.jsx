import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./Quizlist.css";
import {
  Card,
  CardText,
  CardFooter,
  Button,
  Container,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardLink,
} from "reactstrap";

export default function QuizList() {
  const [quizes, setQuizes] = useState([]);
  useEffect(() => {
    fetchQuizes();
  }, []);

  const handleChange = (e) => {
    setQuizes({ ...quiz, [e.target.name]: e.target.value });
  };

  const fetchQuizes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9092/QuizService/quiz/allquiz`
      );
      setQuizes(response.data);
    } catch (error) {
      console.error("Failed to fetch quiz:", error);
    }
  };
  const deleteQuiz = async (id) => {
    try {
      await axios.delete(`http://localhost:9092/QuizService/quiz/delete/${id}`);

      fetchQuizes();
    } catch (error) {
      console.error("Failed to delete question:", error);
    }
  };
  return (
    <div className="quiz-list">
      <h2>List of all Quizes</h2>
      <Link to="/addQuiz">Add New Quiz</Link>
      <div className="quiz-container">
        {quizes.map((quiz) => (
          <div key={quiz.id} className="quiz-item">
            <div> Id: {quiz.id}</div>
            <div>Quiz Title: {quiz.title}</div>
            <div>
              Question Ids:
              {quiz.questionIds.map((id) => id + ", ")}
            </div>
            <button onClick={() => deleteQuiz(quiz.id)}>Delete</button>
            <Link to={`/fetchquiz/${quiz.id}`}>Play Quiz</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
