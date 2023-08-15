import React from "react";
import { render } from "react-dom";
import ReactDom from "react-dom/client";

function App(){
    return(
        <div>
            <h1>hello world</h1>
        </div>
    )
}


ReactDom.createRoot(document.getElementById("root")).render(<App/>);
