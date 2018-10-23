import React,{Component} from 'react';
import {Route} from 'react-router-dom';
 import SelectByName from '../SubComponents/SelectByName';

import ShowAllCars from '../SubComponents/ShowAllCars';
class RouterComponent extends Component{
    render(){
        return(
            <div>
            <Route path='/allcars' component={ShowAllCars}/> 
            <Route path='/sortbyname' component={SelectByName}/>
            
            </div>  
        );
    }
}
export default RouterComponent;