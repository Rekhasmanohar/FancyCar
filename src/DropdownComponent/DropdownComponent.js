import React,{Component} from 'react';
import './Body.css';
import {Link} from 'react-router-dom';

class DropdownComponent extends Component{
    render(){
        return(
               
            <ul>
         
            <li className="dropdown">
              <a href="#" className="dropbtn">Sort cars</a>
              
                <div className="dropdown-content">
                <Link  style={{color:"black","fontSize":"15px" ,float:"left"}} to='/allcars'>Show all cars</Link><br/>
                <Link  style={{color:"black","fontSize":"15px" ,float:"left"}} to='/sortbyname'>Sort cars</Link><br/>
                              
                </div>
                
               
            </li>
          </ul>
               

        );
    }
}
export default DropdownComponent;