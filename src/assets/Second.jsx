import { Col, Row } from "react-bootstrap"
import img from "./2019.jpg"
const Second = () => {
  return (
    <Row>
      <Col sm={12} md={6} className="centered flex-column">
        <h1>Growing Stronger Together - 2019</h1>
        <h6  style={{"--delay": "2"}}>We faced challenges together, learning and growing as a couple. Our bond became stronger with each hurdle overcome</h6>
      </Col>
      <Col sm={12} md={6}  className="centered">
        <img className="img-fluid" src={img} alt="wedding" />
      </Col>
    </Row>
  )
}

export default Second