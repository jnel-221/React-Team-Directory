import React from "react";
import "./style.css";

function NavSearch(props) {
  return (
    <div>
    <nav className="navbar bg-light justify-content-center">
        <form className="d-flex">
        <input onChange={props.handleInputChange} value={props.value}
        className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
    </nav>
    <br/>
    </div>
  );
}

export default NavSearch;
