import React from "react";
import "./style.css"
import TableRow from "../TableData/TableData";


function TableHead (){
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
        <TableRow />
        </table>

    )
}

export default TableHead;