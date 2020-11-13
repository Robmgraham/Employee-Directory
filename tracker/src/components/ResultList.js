import React from "react";

 function ResultList(props) {
  return (
    <table>
        <thead>
            <tr>
                <th>Full Name</th>
            </tr>
        </thead>
        <tbody>
            {
                props.results.map(result => (
                 <img alt="" className="img-fluid" src={result.picture.thumbnail}/>))
                 
            }
        </tbody>
    </table>
) 
  
} 



// this works below
//may be easier to remove the .map function and do just props.results.picture.thumbnail
//  function ResultList(props) {
//   return (
    
//     <table>   
//       <tr className="list-group">photo
//         {props.results.map(result => (
//           <td className="list-group-item"> td
//             <img alt="" className="img-fluid" src={result.picture.thumbnail}/>OOOO       
//           </td>
      
//       ))}
//       </tr>
//       </table>
    
    
//   );
// } 

export default ResultList;
