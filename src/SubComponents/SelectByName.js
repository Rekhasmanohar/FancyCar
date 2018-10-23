import React from 'react';
class SelectById extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cars:[],
            isLoaded:false,
            available:"",
            };
    }
    componentDidMount(){
        fetch('http://192.168.0.13:8080/fancycars/rest/data/cars')
        .then(res=>res.json())
        .then(json=>{
            this.setState({
                cars:json,
                isLoaded:true,
                
            })
        });
    }
    render(){
        return(
            <h1>Select cars by Name</h1>
        );
    }
}
export default SelectById;