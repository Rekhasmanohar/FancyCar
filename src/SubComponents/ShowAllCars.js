import React from 'react';
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';
class ShowAllCars extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cars:[],
            isLoaded:false,
            
        };
    }
    componentDidMount(){
        fetch('http://192.168.0.13:8080/fancycars/webapi/data/cars')
        .then(res=>res.json())
        .then(data=>{
            
            this.setState({
                cars:data,
                isLoaded:true,
                
            })
        });
    }
    
    render(){
        
      var {isLoaded,cars}=this.state;
      
          if(!isLoaded){
            return <div style={{color:"white"}}>Loading....</div>
        }else{
            return(
                <div style={{color:"white"}}>
                <table>
               
                    
                   {cars.map(car=>(
                       
                      <tr key={car.carName}>
                       
                       <td>
                              <ImageComponent image={car.img} name={car.carName}/>  
                            
                             
                       </td>
                       <div>
                       <table>
                       <tr>Car Name:{car.carName}</tr><br/>
                       <tr>Car Make:{car.carMake}</tr><br/>
                       <tr>Car Model:{car.carModel}</tr><br/>
                       
                       <ButtonComponent id={car.carId}/>
                       </table>
                       </div>
                       </tr>
                   ))}
                   
                   </table>
                </div>
            );
        }
        
        
    }
}
export default ShowAllCars;