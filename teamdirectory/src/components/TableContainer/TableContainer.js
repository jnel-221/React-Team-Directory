import React, { Component } from "react";
import Container from "../Wrapper/Wrapper";
import Header from "../Header/Header";
import NavSearch from "../NavSearch/NavSearch";

class TableContainer extends Component {
  state = {
    result: "",
  };

  render() {
    return (
      <>
        <Container />
        <Header />
        <NavSearch />
      </>
    );
  }
}

export default TableContainer;
