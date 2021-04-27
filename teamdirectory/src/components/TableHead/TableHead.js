import React from "react";
import "./style.css"


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
        <tbody>

        </tbody>

        </table>

    )
}

export default TableHead;