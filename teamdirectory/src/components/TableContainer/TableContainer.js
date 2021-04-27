import React, {Component} from "react";
import Container from "../Wrapper/Wrapper";
import Header from "../Header/Header";


class TableContainer extends Component {
    state={
        result: "",
    };

    render(){
       return( 
           <>
       <Container />
       <Header />
        </>
        
       );
    }

}

export default TableContainer;