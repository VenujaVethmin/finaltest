import React from "react";
import { render } from "react-dom";
import ReactDom from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Api from "./Api";
import Navbar from "./Navbar";
function App(){
    return(

        <BrowserRouter>

         <Navbar/>

        <Routes>
        {/* <Api/> */}
            
        </Routes>

        

        </BrowserRouter>
        
           
        
    )
}


ReactDom.createRoot(document.getElementById("root")).render(<App/>);
