import { Col, Row } from "react-bootstrap"
import img from "./2023.jpg"
const Sixth = () => {
  return (
    <Row>
      <Col sm={12} md={6} className="centered flex-column">
        <h1>Five Years of Growth - 2023</h1>
        <h6 style={{"--delay": "2"}}>five years of laughter, sadness, love, and growth. We celebrate our journey, excited for the adventures that await us.</h6>
      </Col>
      <Col sm={12} md={6}  className="centered">
        <img className="img-fluid" src={img} alt="wedding" />
      </Col>
    </Row>
  )
}

export default Sixth