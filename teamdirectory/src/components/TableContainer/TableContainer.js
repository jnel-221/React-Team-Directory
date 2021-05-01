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
    filteredResult: [],
    // order: "descend",
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  }

  searchEmployees = (event) => {
    const searchName = event.target.value.trim().toLowerCase();
    const unfilteredResult = this.state.result;

    const searchResults = unfilteredResult.filter((employee) => {
      let name =
        employee.name.first.toLowerCase() + employee.name.last.toLowerCase();
      return name.includes(searchName);
    });

    this.setState({ filteredResult: searchResults, search: searchName });
  };

  renderTable = () => {
    if (this.state.search === "") {
      return (
        <TableHead
          data_order={this.state.order}
          sortColumns={this.sortColumns}
          results={this.state.result}
        />
      );
    } else {
      return (
        <TableHead
          data_order={this.state.order}
          sortColumns={this.sortColumns}
          results={this.state.filteredResult}
        />
      );
    }
  };
  render() {
    return (
      <>
        <Container />
        <Header />
        <NavSearch searchEmployees={this.searchEmployees} />
        <div className="mx-5">{this.renderTable()}</div>
      </>
    );
  }
}

export default TableContainer;
