import React from "react";
import "./style.css"
import TableRow from "../TableData/TableData";
import FormatDate from "../../utils/helpers/formatDate";


function TableHead ({results}){
    
    return(
        <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
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
        />))}
        </table>

    )
}

export default TableHead;