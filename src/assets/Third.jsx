import { Col, Row } from "react-bootstrap"
import img from "./2020.jpg"
const Third = () => {
  return (
    <Row>
      <Col sm={12} md={6} className="centered flex-column">
        <h1>Embracing the Unexpected - 2020</h1>
        <h6 style={{"--delay": "2"}}>Life threw adventures our way, some expected, some surprising. We embraced the unknown, hand in hand.</h6>
      </Col>
      <Col sm={12} md={6}  className="centered">
        <img className="img-fluid" src={img} alt="wedding" />
      </Col>
    </Row>
  )
}

export default Third