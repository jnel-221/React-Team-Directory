import React, { Component } from "react";
import Container from "../Wrapper/Wrapper";
import Header from "../Header/Header";
import NavSearch from "../NavSearch/NavSearch";
import TableHead from "../TableHead/TableHead";
import API from "../../utils/API";
import FormatDate from "../../utils/helpers/formatDate";
import "./style.css"

class TableContainer extends Component {
  //set state
  state = {
    result: [],
    search: "",
    filteredResult: [],
  };

  //call API and store data in result array
  componentDidMount() {
    API.getEmployees()
      .then(res => 
        this.setState({
          result: res.data.results.map((user) => {
            return {
              uuid: user.login.uuid,
              id: user.login.uuid,
              picture: user.picture.medium,
              firstname: user.name.first,
              lastname: user.name.last,
              phone: user.phone,
              email: user.email,
              DOB: FormatDate(user.dob.date),
            };
          }),
        })
      ).then().catch((err) => console.log(err));
     
  }
  
  //filter result array by search-box value and store in new array.
  searchEmployees = (event) => {
    const searchName = event.target.value.trim().toLowerCase();
    const unfilteredResult = this.state.result;
    
    const searchResults = unfilteredResult.filter((employee) => {
      let name =
        employee.firstname.toLowerCase() + employee.lastname.toLowerCase();
      return name.includes(searchName);
    });

    this.setState({ filteredResult: searchResults, search: searchName });
  };

  //renders table with filtered array or unfiltered array if search results are/are not present.
  renderTable = () => {
    if (this.state.search === "") {
     
      return <TableHead results={this.state.result} />;
    } else {
      return <TableHead results={this.state.filteredResult} />;
    }
  };

  render() {
    return (
      <>
        <Container />
        <Header />
        <NavSearch searchEmployees={this.searchEmployees} />
        <div className="usertable table-responsive mx-5">{this.renderTable()}</div>
      </>
    );
  }
}

export default TableContainer;
