import React from "react";
import "./style.css";
import TableRow from "../TableData/TableData";
import useSortableData from "../../utils/helpers/sortTable";

function TableHead(props) {
  //bring in custom hook for sorting table
  const { items: sortedUsers, requestSort, sortConfig } = useSortableData(
    props.results
  );

  //return internal state of sorted table
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
  

    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const [sortCategory, setSortCategory] = React.useState("");

  const handleClick = (column) => {
    requestSort(column);
    setSortCategory(column);
    
  };

  return (
    <table className="table table-striped table-hover">
      <thead className=".usertable">
        <tr>
          <th scope="col">Image</th>
          <th
            onClick={() => handleClick("firstname")}
            className={getClassNamesFor("name")}
            scope="col"
          >
            Name
            {sortCategory === "firstname" && sortConfig.direction === "ascending" ? (
              <span className="caret mx-2"><i className="fas fa-caret-down"></i></span>
            ) : (
              <span className="caret mx-2"><i class="fas fa-caret-up"></i></span>
            )}
          </th>
          <th
            onClick={() => handleClick("phone")}
            className={getClassNamesFor("phone")}
            scope="col"
          >
            Phone
            {sortCategory === "phone" && sortConfig.direction === "ascending" ? (
              <span className="caret mx-2"><i className="fas fa-caret-down"></i></span>
            ) : (
              <span className="caret mx-2"><i class="fas fa-caret-up"></i></span>
            )}
          </th>
          <th
            onClick={() => handleClick("email")}
            className={getClassNamesFor("email")}
            scope="col"
          >
            Email
            {sortCategory === "email" && sortConfig.direction === "ascending" ? (
              <span className="caret mx-2"><i className="fas fa-caret-down"></i></span>
            ) : (
              <span className="caret mx-2"><i class="fas fa-caret-up"></i></span>
            )}
          </th>
          <th
            onClick={() => handleClick("DOB")}
            className={getClassNamesFor("dob")}
            scope="col"
          >
            DOB
            {sortCategory === "DOB" && sortConfig.direction === "ascending" ? (
              <span className="caret mx-2"><i className="fas fa-caret-down"></i></span>
            ) : (
              <span className="caret mx-2"><i class="fas fa-caret-up"></i></span>
            )}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((result) => (
          <TableRow
            key={result.uuid}
            id={result.uuid}
            picture={result.picture}
            name={`${result.firstname}  ${result.lastname}`}
            phone={result.phone}
            email={result.email}
            DOB={result.DOB}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TableHead;
