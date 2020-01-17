import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button
 } from 'reactstrap';

const ButtonInput = props => {

  return (
    <div>
      <InputGroup>
        <Input name={props.name}/>
        <InputGroupAddon addonType="append">
          <Button color="secondary">{props.name}</Button>
        </InputGroupAddon>
      </InputGroup>
      <br />
    </div>
  );
}


export default ButtonInput;