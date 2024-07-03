import { Col, Row } from "react-bootstrap"
import img from "./2022.jpg"
const Fifth = () => {
  return (
    <Row>
      <Col sm={12} md={6} className="centered flex-column">
        <h1>Weathering the Storms - 2022</h1>
        <h6 style={{"--delay": "2"}}>Life isn't always sunshine and rainbows, but together, we weathered the storms. We came out stronger, more resilient.</h6>
      </Col>
      <Col sm={12} md={6}  className="centered">
        <img className="img-fluid" src={img} alt="wedding" />
      </Col>
    </Row>
  )
}

export default Fifth