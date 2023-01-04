import { Col, Form, FormGroup, Row, Stack } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";

export function NoteForm() {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <Form.Control />
              <CreatableReactSelect isMulti />
            </Form.Group>
          </Col>
          <Form.Group controlId="markdown">
            <Form.Label>Body</Form.Label>
            <Form.Control required as="textarea" rows={15} />
            <CreatableReactSelect isMulti />
          </Form.Group>
        </Row>
      </Stack>
    </Form>
  );
}
