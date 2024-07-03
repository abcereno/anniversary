import { Col, Row } from "react-bootstrap"
import AutoNavigateContext from './Contexts';
import { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const { isAutoNavigate, toggleAutoNavigate } = useContext(AutoNavigateContext);
  return (
    <Row className="centered">
        <h1 className="centered fs-2">HAPPY</h1>
        <h1 className="centered fs-1">6TH WEDDING</h1>
        <h1 className="centered fs-2"> ANNIVERSARY!!</h1>
        <Col className="centered">
        <Link className="btn bg-primary" onClick={toggleAutoNavigate}>
                {isAutoNavigate
                  ? `Stop Journey`
                  : "Start Journey"}
        </Link>
        </Col>
    </Row>
  )
}

export default Home