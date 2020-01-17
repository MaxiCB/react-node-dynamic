import React, { useEffect } from "react";
import { Container, Col, Row, Button, Label } from "reactstrap";

import { connect } from "react-redux";
import { setPort, setEndpoint, setHeader, setBody } from "../Actions/actions";
// Components
import InputBar from "./InputBar";
import ResponseCard from "./ResponseCard";
import ButtonInput from "./ButtonInput";

const App = props => {

  console.log(props)

  return (
    <Container className="App">
      <Row>
        <Col>
        <Label>Enter the port</Label>
        <ButtonInput name={'SET PORT'}/>
        <Label>Enter the endpoint</Label>
        <InputBar/>
        <Label>Enter headers</Label>
        <ButtonInput name={'SET HEADERS'}/>
        <Label>Enter body</Label>
        <ButtonInput name={'SET BODY'}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="primary">Send</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ResponseCard/>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    port: state.port,
    endpoint: state.endpoint,
    header: state.header,
    body: state.header
  }
}

export default connect(mapStateToProps, {setPort, setEndpoint, setHeader, setBody})(App);
