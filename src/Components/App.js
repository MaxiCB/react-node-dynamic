import React, { useEffect } from "react";
import { Container, Col, Row, Button, Label } from "reactstrap";

import { connect } from "react-redux";
import { setPort, setEndpoint, setHeader, setBody, setMethod } from "../Actions/actions";
// Components
import InputBar from "./InputBar";
import ResponseCard from "./ResponseCard";
import ButtonInput from "./ButtonInput";

const App = props => {

  const setPort = port => {
    props.setPort(port);
  }

  const setMethod = method => {
    props.setMethod(method);
  }

  const setEndpoint = endpoint => {
    props.setEndpoint(endpoint);
  }

  const setHeader = header => {
    props.setHeader(header);
  }

  const setBody = body => {
    props.setBody(body);
  }

  return (
    <Container className="App">
      <Row>
        <Col>
        <Label>Enter the port</Label>
        <ButtonInput name={'SET PORT'} set={setPort}/>
        <Label>Enter the endpoint</Label>
        <InputBar set={setEndpoint} method={setMethod}/>
        <Label>Enter headers</Label>
        <ButtonInput name={'SET HEADERS'} set={setHeader}/>
        <Label>Enter body</Label>
        <ButtonInput name={'SET BODY'} set={setBody}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="primary" onClick={e => console.log(props)}>Send</Button>
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
    method: state.method,
    endpoint: state.endpoint,
    header: state.header,
    body: state.header
  }
}

export default connect(mapStateToProps, {setPort, setEndpoint, setHeader, setBody, setMethod})(App);
