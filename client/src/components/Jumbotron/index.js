import React from "react";

function Jumbotron ({children}) {
  return(
    <div
    style={{marginTop: 120, textAlign: "center" }}
    className="jumbotron"
    >
      {children}
    </div>
  )
}

export default Jumbotron;