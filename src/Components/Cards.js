import { Card, Col, Row } from "react-bootstrap"
import Zoom from "react-reveal/Zoom";
export default function Cards({data}) {
    return (
      <Row>
        <Zoom>
          {data.map((item, index) => (
            <Col sm="12" className="mb-3" key={index}>
              <Card className="d-flex flex-row shadow">
                <Card.Img className="img-item" variant="right" src={item.img} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between">
                    <div>{item.title}</div>
                    <div className="text-danger">{item.price}$</div>
                  </Card.Title>
                  <Card.Text>
                    {item.description}
                    {item.description}
                    {item.description}
                    {item.description}
                    {item.description}
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Zoom>
      </Row>
    );
}