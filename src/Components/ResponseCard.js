import React from "react";
import { Container, Col, Row, Label } from "reactstrap";

import { connect } from "react-redux";

const ResponseCard = props => {
  const temp = { test: "name", example: "example" };
  return (
    <Container className="App">
      <Row>
        <Col>
          <Label>Response Data</Label>
        </Col>
      </Row>
      <Row>
        <Col>
          <code>{JSON.stringify(props.data || temp)}</code>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(ResponseCard);
