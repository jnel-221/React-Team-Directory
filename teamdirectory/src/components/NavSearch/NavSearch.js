import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react/bootstrap/Button';
import "./style.css";

function NavSearch() {
  return (
    <Navbar className="bg-light justify-content-center">
      <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button type="submit">Submit</Button>
      </Form>
    </Navbar>
  );
}

export default NavSearch;
