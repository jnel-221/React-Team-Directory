import React, { Component } from "react";
import Container from "../Wrapper/Wrapper";
import Header from "../Header/Header";
import NavSearch from "../NavSearch/NavSearch";
import TableHead from "../TableHead/TableHead";
import API from "../../utils/API";

class TableContainer extends Component {
  state = {
    result: [],
    search: "",
    filteredResult: []
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  }

  // handleInputChange = (event) => {
  //   const value = event.target.value;
  //   const name = event.target.name;

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  searchEmployees = (event) => {
    const searchName = event.target.value.trim().toLowerCase();
    console.log("in searchEmployees function", searchName);
    const unfilteredResult = this.state.result;
    console.log("unfiltered array ", unfilteredResult);

    // const searchResults = unfilteredResult.filter(employee => {
    //   return employee.name.toLowerCase().includes(searchName)},
    // );

    // this.setState({ filteredResult: searchResults });
  };

  //sorting function here

  render() {
    return (
      <>
        <Container />
        <Header />
        <NavSearch searchEmployees={this.searchEmployees} />
        <div className="mx-5">
          <TableHead results={this.state.result} />
        </div>
      </>
    );
  }
}

export default TableContainer;
