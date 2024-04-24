import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditQuestion() {
  const [question, setQuestion] = useState({
    category: "",
    difficltyLevel: "",
    questionTitle: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    rightAnswer: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const result = await axios.get(
          `http://localhost:9091/QuestionService/question/getQuestion/${id}`
        );
        setQuestion(result.data);
      } catch (error) {
        console.error("Failed to fetch student data:", error);
      }
    };
    fetchQuestion();
  }, [id]);
  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(question);
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:9091/QuestionService/question/update/${id}`,
        question
      );
      navigate("/questionlist");
    } catch (error) {
      console.error("Failed to update question:", error);
    }
  };

  return (
    <div className="editQuestion">
      <h2>Edit Question</h2>
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
        <button type="submit">Update Question</button>
      </form>
    </div>
  );
}
