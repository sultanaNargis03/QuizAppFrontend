import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
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
const Menu = () => {
  return (
    <div className="menu">
      <Link className="list-group-item list-group-item-action" tag="a" to="/">
        Home
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/addquestion"
      >
        Add Question
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="questionlist"
      >
        Question List
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="addquiz"
      >
        Create Quiz
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="quizlist"
      >
        Quiz List
      </Link>
    </div>
  );
};
export default Menu;
