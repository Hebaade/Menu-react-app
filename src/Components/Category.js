import { Button, Col, Row } from "react-bootstrap"
import Roll from "react-reveal/Roll";
export default function Category({filterByCategory,allCategory}) {
  const onFilter = (cat) => {
    filterByCategory(cat)
  }
  return (
    <Row className="my-2 mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <Roll>
          {allCategory.map((cat, index) => (
            <div key={index}>
              <Button
                className="mx-2"
                variant="outline-success"
                onClick={() => onFilter(cat)}>
                {cat}
              </Button>
            </div>
          ))}
        </Roll>
      </Col>
    </Row>
  );
}