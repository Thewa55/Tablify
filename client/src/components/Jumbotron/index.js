import React from "react";

function Jumbotron ({children}) {
  return(
    <div
    style={{marginTop: 120 }}
    className="jumbotron"
    >
      {children}
    </div>
  )
}

export default Jumbotron;