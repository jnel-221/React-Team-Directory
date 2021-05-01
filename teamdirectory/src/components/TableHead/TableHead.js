import React from "react";
import "./style.css";
import TableRow from "../TableData/TableData";
import FormatDate from "../../utils/helpers/formatDate";
import useSortableData from "../../utils/helpers/sortTable";

function TableHead({ results }) {
  
    const { items: sortedUsers, requestSort, sortConfig } = useSortableData(
    results
  );

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const handleClick = (column) => {
    requestSort(column);
    console.log("in handle click ",sortedUsers, column);
  };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th
            onClick={() => handleClick("name")}
            className={getClassNamesFor("name")}
            scope="col"
          >
            Name
          </th>
          <th onClick={() => handleClick("phone")} 
          className={getClassNamesFor("phone")}
          scope="col">
            Phone
          </th>
          <th onClick={() => handleClick("email")} 
          className={getClassNamesFor("email")}
          scope="col">
            Email
          </th>
          <th onClick={() => handleClick("dob")} 
          className={getClassNamesFor("dob")}
          scope="col">
            DOB
          </th>
        </tr>
      </thead>
      {results.map((result) => (
        <TableRow
          key={result.login.uuid}
          id={result.login.uuid}
          picture={result.picture.medium}
          firstname={result.name.first}
          lastname={result.name.last}
          phone={result.phone}
          email={result.email}
          DOB={FormatDate(result.dob.date)}
        />
      ))}
    </table>
  );
}

export default TableHead;
