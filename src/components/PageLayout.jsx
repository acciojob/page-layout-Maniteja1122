import React from "react"
const PageLayout=({heading , text ,footer})=>{
    return (<>
    <h1>{heading}</h1>
    <p>{text}</p>
    <p>{footer}</p>
    </>)
  }
  export default PageLayout