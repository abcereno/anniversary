import { Col, Row } from "react-bootstrap"
import img from "./2024.jpg"
const Credits = () => {
  return (
    <Row>
      <Col sm={12} md={6} className="centered flex-column">
        <h1>Our Compass: Love</h1>
        <h6 style={{"--delay": "2"}}>Six years in, and we've seen it all: fiery passion, cozy contentment, side-splitting laughter, and the occasional tear. Like a compass, we need each other - north to find south, laughter to understand tears, and love to navigate any storm.</h6>
      </Col>
      <Col sm={12} md={6}  className="centered">
        <img className="img-fluid" src={img} alt="wedding" />
      </Col>
    </Row>
  )
}

export default Credits