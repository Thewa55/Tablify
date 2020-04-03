import React from "react";
import './jumbostyle.css';

function Jumbotron ({children}) {
  return(
    <div
    style={{marginTop: "15%" }}
    className="jumbotron jumbotron-main"
    >
      {children}
    </div>
  )
}

export default Jumbotron;