import React from "react";
import "./style.css";
import TableRow from "../TableData/TableData";
import useSortableData from "../../utils/helpers/sortTable";

function TableHead(props) {
  
    const { items: sortedUsers, requestSort, sortConfig } = useSortableData(
    props.results
  );

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const handleClick = (column) => {
    requestSort(column);
  };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th
            onClick={() => handleClick("firstname")}
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
          <th onClick={() => handleClick("DOB")} 
          className={getClassNamesFor("dob")}
          scope="col">
            DOB
          </th>
        </tr>
      </thead>
      {sortedUsers.map((result) => (
        <TableRow
          key={result.uuid}
          id={result.uuid}
          picture={result.picture}
          name= {`${result.firstname}  ${result.lastname}`}
          phone={result.phone}
          email={result.email}
          DOB={result.DOB}
        />
      ))}
    </table>
  );
}

export default TableHead;
