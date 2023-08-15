import React from "react";
import ReactDom from "react";

function App(){
    return(
        <div>
            <h1>hello world</h1>
        </div>
    )
}


ReactDom.render(<App/>,document.getElementById("root"));