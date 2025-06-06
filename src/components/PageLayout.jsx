import React from "react"
const PageLayout=({heading , children ,footer})=>{
    return (<>
    <h1>{heading}</h1>
    <p>{children}</p>
    <p>{footer}</p>
    </>)
  }
  export default PageLayout