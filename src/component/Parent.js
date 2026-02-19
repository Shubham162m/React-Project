import React from 'react';
import Child from './Child';

function Parent(props)
{
   
        
        return(
           <div>
                  <tr>
                        {props.std.name}
                        {props.std.age}
                        {props.std.course}

                </tr>
           </div>
              
           
        ); 
}
export default Parent;