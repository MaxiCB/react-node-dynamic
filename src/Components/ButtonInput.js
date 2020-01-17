import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button
 } from 'reactstrap';

const ButtonInput = props => {

  let data;

  const updateData = e => {
    data = e.target.value
  }

  const sendData = () => {
    let update = props.set;
    update(data);
  }

  return (
    <div>
      <InputGroup>
        <Input name={props.name} onChange={e => updateData(e)}/>
        <InputGroupAddon addonType="append">
          <Button color="secondary" onClick={e => sendData()}>{props.name}</Button>
        </InputGroupAddon>
      </InputGroup>
      <br />
    </div>
  );
}


export default ButtonInput;