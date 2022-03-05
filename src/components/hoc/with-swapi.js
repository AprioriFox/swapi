import React from "react";
import { Consumer } from "../swapi-context";

const withSwapi = (Component,divideFunc) =>{

    return (props) =>{
        return(
            <Consumer>
                {
                    (swapi)=>{
                        const methods = divideFunc(swapi)
                        return (<Component {...methods} {...props} />)
                    }
                }
            </Consumer>
        )
        
        
    }
}

export default withSwapi;

