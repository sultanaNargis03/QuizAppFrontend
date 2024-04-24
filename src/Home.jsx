import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="text-center app">
      <h1>Welcome to Quiz App</h1>
      <Container>
        <Link to="/questionlist">Let's explore</Link>
      </Container>
    </div>
  );
};
export default Home;
