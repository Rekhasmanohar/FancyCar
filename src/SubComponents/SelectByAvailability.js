import React from 'react';

class SortByAvailability extends React.Component{
    createTable = () => {
        let table = []
    
        // Outer loop to create parent
        for (let i = 0; i < 10 ; i++) {
          let children = []
          //Inner loop to create children
          for (let j = 0; j < 2; j++) {
            children.push(<td>{`Column ${j + 1}`}</td>)
          }
          //Create the parent and add the children
          table.push(<tr>{children}</tr>)
        }
        return table;
      }
    render(){
       
        return(
            <div>
               <table>
                    <tr>
                    <th> Select cars by availability </th>
                    </tr>
                    <tr>
                    <select>
                        <option>All</option>
                        <option>In dealership</option>
                        <option>Out of stock</option>
                        <option>Unavailable</option>
                    </select>
                    </tr>
                    {this.createTable()}
                     {/* <tr>
                        <td><h1>car1</h1></td>
                    </tr>
                    <tr>
                        <td><h1>car1</h1></td>
                    </tr>
                    <tr>
                        <td><h1>car1</h1></td>
                    </tr>*/}
                </table> 
           
            
                </div>
        );
    }
}
export default SortByAvailability;