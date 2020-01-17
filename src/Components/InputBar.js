import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupButtonDropdown,
  InputGroupAddon,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

const InputBar = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  let endpoint;

  const updateEndpoint = e => {
    endpoint = e.target.value;
  };

  const setEndpoint = () => {
    let send = props.set;
    send(endpoint)
  }

  const setMethod = method => {
    let update = props.set;
    update(method);
  }

  return (
    <div>
      <InputGroup>
        <Input onChange={e => updateEndpoint(e)}/>
        <InputGroupAddon addonType="append"><Button color="primary" onClick={e => setEndpoint()}>Update</Button></InputGroupAddon>
        <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
          <DropdownToggle caret>
            {"METHOD"}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header><Button onClick={e=> setMethod("get")}>GET</Button></DropdownItem>
            <DropdownItem header><Button onClick={e=> setMethod("post")}>POST</Button></DropdownItem>
            <DropdownItem header><Button onClick={e=> setMethod("update")}>UPDATE</Button></DropdownItem>
            <DropdownItem header><Button onClick={e=> setMethod("del")}>DEL</Button></DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
      <br />
    </div>
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


export default InputBar;