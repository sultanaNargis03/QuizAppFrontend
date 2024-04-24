import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateQuiz() {
  const [quiz, setQuiz] = useState({
    categoryName: "",
    numQuestions: "",
    title: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(quiz);

    e.preventDefault();
    try {
      await axios.post("http://localhost:9092/QuizService/quiz/create", quiz);
      navigate("/quizlist");
    } catch (error) {
      console.error("Failed to create quiz:", error);
    }
  };

  return (
    <div className="addQuestion">
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category Name: </label>
          <input
            type="text"
            value={quiz.categoryName}
            onChange={handleChange}
            name="categoryName"
          />
        </div>
        <div>
          <label>Number of Questions: </label>
          <input
            type="number"
            value={quiz.numQuestions}
            onChange={handleChange}
            name="numQuestions"
          />
        </div>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={quiz.title}
            onChange={handleChange}
            name="title"
          />
        </div>
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
}
