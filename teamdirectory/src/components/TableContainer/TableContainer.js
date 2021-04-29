import React, { Component } from "react";
import Container from "../Wrapper/Wrapper";
import Header from "../Header/Header";
import NavSearch from "../NavSearch/NavSearch";
import TableHead from "../TableHead/TableHead";
import API from "../../utils/API";

class TableContainer extends Component {
  state = {
    result: [],
    name:""
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => this.setState({ result: res.data.results }))
      .catch((err) => console.log(err));
  }

  searchEmployees = () => {
    const searchName = this.state.search.trim();
    console.log(searchName);
    // const searchResults= this.result.filter((employee)=> employee.firstname === searchName);
    // this.setState({'result': searchResults})
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <Container />
        <Header />
        <NavSearch />
        <div className="mx-5">
          <TableHead results={this.state.result} />
        </div>
      </>
    );
  }
}

export default TableContainer;
