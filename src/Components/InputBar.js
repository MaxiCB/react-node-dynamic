import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

const InputBar = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <InputGroup>
        <Input />
        <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
          <DropdownToggle caret>
            METHOD
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header><Button onClick={e=> console.log("GET")}>GET</Button></DropdownItem>
            <DropdownItem header><Button onClick={e=> console.log("POST")}>POST</Button></DropdownItem>
            <DropdownItem header><Button onClick={e=> console.log("UPDATE")}>UPDATE</Button></DropdownItem>
            <DropdownItem header><Button onClick={e=> console.log("DEL")}>DEL</Button></DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
      <br />
    </div>
  );
}


export default InputBar;