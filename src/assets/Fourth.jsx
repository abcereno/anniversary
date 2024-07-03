import { Col, Row } from "react-bootstrap"
import img from "./2021.jpg"
const Fourth = () => {
  return (
    <Row>
      <Col sm={12} md={6} className="centered flex-column">
        <h1>Dreams and Commitment - 2021</h1>
        <h6 style={{"--delay": "2"}}>Our love deepened, and our commitment solidified. We built a life together, supporting each other's dreams.</h6>
      </Col>
      <Col sm={12} md={6}  className="centered">
        <img className="img-fluid" src={img} alt="wedding" />
      </Col>
    </Row>
  )
}

export default Fourth