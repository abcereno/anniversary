import { Col, Row } from "react-bootstrap"
import img from "./wedding.jpg"
const First = () => {
  return (
    <Row>
      <Col sm={12} md={6} className="centered flex-column">
        <h1>The Promise</h1>
        <h6 style={{"--delay": "2"}}>The beginning of a beautiful journey. We built a foundation of trust, communication, and love.</h6>
      </Col>
      <Col sm={12} md={6}  className="centered">
        <img className="img-fluid" src={img} alt="wedding" />
      </Col>
    </Row>
  )
}

export default First