import React from 'react';
class Buttoncomponent extends React.Component{
    constructor(props){
        super(props);
        this.state={available:"",val:""}
    }
    componentDidMount(){
        fetch(`http://192.168.0.13:8080/fancycars/webapi/data/availability/${this.props.id}`)
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                available:json,
                
            })
                
        })
        
    }

    
   
    render(){
        var {available}=this.state;
        // console.log(available.available);
    //    console.log(JSON.stringify(this.state.available.available));
      
    // var available_val=Object.keys(available).map(function(key){
               
    //     return console.log(available[key]);
    // });
    
  
        if(available.available !=="In Dealership"){
            return (<div>
                   <p style={{fontSize:"20px",fontFamily:"san-serif"}}>Availability:{available.available}</p>
            </div>);
        }else{
        return(

            <div>
            <p style={{fontSize:"20px",fontFamily:"san-serif"}}>Availability:{available.available}</p>
            <button >Buy</button>
            </div>
        );
    }
}   
    
}
export default Buttoncomponent;