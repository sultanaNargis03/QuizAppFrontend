import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function FetchQuiz() {
  const [quiz, setQuiz] = useState([]);
  const [responses, setResponses] = useState({
    id: "",
    response: "",
  });
  const [score, setScore] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  let [lock, setLock] = useState(false);

  const { id } = useParams();

  const handleChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const fetchQuiz = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9092/QuizService/quiz/fetchquiz/${id}`
      );
      setQuiz(response.data);
    } catch (error) {
      console.error("Failed to fetch quiz:", error);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  const click = (rightAnswer) => {
    // alert(responses);
    // alert(rightAnswer);

    if (lock === false) {
      setResponses(responses);
      if (responses === rightAnswer) {
        setLock((lock) => true);
        setScore((score) => score + incrementBy);

        // if (lock === true) {
        //   toast.success("lock is ttrue", {
        //     position: "top-center",
        //   });
        // } else {
        //   toast.success("lock is false", {
        //     position: "top-center",
        //   });
        // }
        toast.success("Congrats!!you have choosen the correct option", {
          position: "top-center",
        });
      }
      // alert(score);
      else {
        setLock(true);
      }
      setLock(false);
    }
  };

  return (
    <div className="quiz-list">
      <ToastContainer />
      <h2>Quiz Questions</h2>
      <form>
        <div className="quiz-container">
          {quiz.map((q) => (
            <div className="quiz-item" key={q.id}>
              <div>Id: {q.id}</div>
              <div>Question Title: {q.questionTitle}</div>
              <label>your answer: </label>
              <select
                value={responses.response}
                onClick={() => click(q.rightAnswer)}
                onChange={(e) => setResponses(e.target.value)}
              >
                <option value="" disabled="disabled">
                  Select option
                </option>
                <option>{q.option1}</option>
                <option>{q.option2}</option>
                <option>{q.option3}</option>
                <option>{q.option4}</option>
              </select>
            </div>
          ))}
        </div>
        <h2>Score : {score}</h2>

        <Link to={"/quizlist"}>Back to Quiz List</Link>
      </form>
    </div>
  );
}
