import React from "react";
import "./style.css";

function NavSearch({searchEmployees}) {
  return (
    <div>
    <nav className="navbar bg-light justify-content-center navfont">
        <form className="d-flex">
        <input 
        onChange={e=> searchEmployees(e)}
        className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
    </nav>
    <br/>
    </div>
  );
}

export default NavSearch;
