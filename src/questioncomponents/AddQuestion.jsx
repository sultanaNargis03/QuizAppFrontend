import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddQuestion() {
  const [question, setQuestion] = useState({
    category: "",
    difficltyLevel: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    questionTitle: "",
    rightAnswer: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(question);
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:9091/QuestionService/question/addquestion",
        question
      );
      navigate("/questionlist");
    } catch (error) {
      console.error("Failed to add question:", error);
    }
  };

  return (
    <div className="addQuestion">
      <h2>Add Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={question.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Difficulty Level:</label>
          <input
            type="text"
            name="difficltyLevel"
            value={question.difficltyLevel}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Question Title:</label>
          <input
            type="text"
            name="questionTitle"
            value={question.questionTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Option1:</label>
          <input
            type="text"
            name="option1"
            value={question.option1}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>option2:</label>
          <input
            type="text"
            name="option2"
            value={question.option2}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Option3:</label>
          <input
            type="text"
            name="option3"
            value={question.option3}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Option4:</label>
          <input
            type="text"
            name="option4"
            value={question.option4}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Right Answer:</label>
          <input
            type="text"
            name="rightAnswer"
            value={question.rightAnswer}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
}
