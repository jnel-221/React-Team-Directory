import React, { Component } from "react";
import Container from "../Wrapper/Wrapper";
import Header from "../Header/Header";
import NavSearch from "../NavSearch/NavSearch";
import TableHead from "../TableHead/TableHead";
import API from "../../utils/API";

class TableContainer extends Component {
  state = {
    result: [],
    name: "",
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  }

  // handleInputChange = (event) => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   console.log("in handle input change value: ", value, "name ", name)

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  searchEmployees = (event) => {
    const searchName = event.target.value.trim();
    console.log("in searchEmployees function", searchName);
    const unfilteredResult = this.state.result;
    console.log("unfiltered array ", unfilteredResult);

    const searchResults = unfilteredResult.filter((employee) =>
      employee.name.first.includes(searchName.toLowerCase()),
    );

    this.setState({ result: searchResults });
  };

  render() {
    return (
      <>
        <Container />
        <Header />
        <NavSearch
          searchEmployees={this.searchEmployees}
          handleInputChange={this.handleInputChange}
        />
        <div className="mx-5">
          <TableHead results={this.state.result} />
        </div>
      </>
    );
  }
}

export default TableContainer;
