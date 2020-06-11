import React from 'react';


const ReturnResult = (props) => {

    let newObj = props.value;
    let noOfNotes=props.count;
    

    return (
        
        Object.keys(newObj).map((key,i) => {
            return (<React.Fragment>
                <table key={i} className="table table-striped">
                    <tbody>
                    <tr key={i} >
                        <td><span>Denomination: {key}</span></td>
                        <td><span>No of Notes:{newObj[key]}</span></td>
                    </tr>
                    </tbody>
                    </table>
                    
            </React.Fragment>
            
               
            )
          
        })
    )

   
}

export default ReturnResult;