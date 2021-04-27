import React, { Component } from "react";
import Container from "../Wrapper/Wrapper";
import Header from "../Header/Header";
import NavSearch from "../NavSearch/NavSearch";
import TableHead from "../TableHead/TableHead";
import API from "../../utils/API";

class TableContainer extends Component {
  state = {
    result: [],
  };

  componentDidMount(){
      API.getEmployees().then(res=>this.setState({result: res.data.results})).catch(err=>console.log(err));
  }


  render() {
    return (
      <>
        <Container />
        <Header />
        <NavSearch />
        <TableHead results={this.state.result}/>
      </>
    );
  }
}

export default TableContainer;
