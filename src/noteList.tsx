import { Button, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NoteList() {
  return (
    <>
      <Row>
        <Col>
          <h1>Notes</h1>
        </Col>
        <Col>
          <Stack direction="horizontal" gap={2}>
            <Link to="/new">
              <Button variant="primary"> Create</Button>
            </Link>
            <Button variant="outline-secondary"> Edit Tags</Button>
          </Stack>
        </Col>
      </Row>
    </>
  );
}
