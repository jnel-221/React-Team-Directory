import React from "react";
import "./style.css";

function TableRow(props) {
  console.log("tablerow", props)
  return (
    <tbody>
      <tr>
        <td>
        <img src={props.picture} alt={props.firstname}></img></td>
        <td>{props.firstname} {props.lastname}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.DOB}</td>
      </tr>
    </tbody>
  );
}

export default TableRow;
