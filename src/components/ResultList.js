import React from "react";
import "./ResultList.css";





 function ResultList(props) {
   
  return (
   
    <table>   
      
        {props.results.map(result => (
          
          <tr> 
            <td><img alt="" className="img-fluid" src={result.picture.thumbnail}/></td> 
            <td>{result.name.last},{result.name.first}</td> 
            <td> {result.phone}</td>
            <td> {result.email}</td>
            <td> {result.dob.date.slice(0,10)}</td>       
         </tr>
         
      ))}
      
      </table>
      
    
  );
} 

export default ResultList;
