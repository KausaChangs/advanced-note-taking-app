import { useRef } from "react";
import { Button, Col, Form, FormGroup, Row, Stack } from "react-bootstrap";
import { Link, useHref } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";

export function NoteForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} />
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
            <Form.Control required as="textarea" ref={markdownRef} rows={15} />
          </Form.Group>
        </Row>
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-end
        "
        >
          <Button type="submit" variant="primary">
            {" "}
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}
