import React from "react";
import "./style.css";

function TableRow(props) {
  console.log("tablerow", props)
  return (
    <tbody>
      <tr>
        <td>
        <img className="flex"src={props.picture} alt={props.firstname}></img></td>
        <td className="align-middle">{props.firstname} {props.lastname}</td>
        <td className="align-middle">{props.phone}</td>
        <td className="align-middle">
        <a href={props.email} target="__blank">{props.email}</a></td>
        <td className="align-middle">{props.DOB}</td>
      </tr>
    </tbody>
  );
}

export default TableRow;
