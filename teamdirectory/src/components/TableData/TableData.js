import React from "react";
import "./style.css";

function TableRow(props) {

  return (
    <tbody>
      <tr id={props.id}>
        <td>
        <img className="flex"src={props.picture} alt={props.firstname}></img></td>
        <td className="align-middle">{props.name}</td>
        <td className="align-middle">{props.phone}</td>
        <td className="align-middle">
        <a href={props.email} target="__blank">{props.email}</a></td>
        <td className="align-middle">{props.DOB}</td>
      </tr>
    </tbody>
  );
}

export default TableRow;
