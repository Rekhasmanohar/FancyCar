import React from 'react';
class ImageComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state={image:"Loading..."}
    }
//     componentDidMount(){
//         fetch(`${this.props.image}`)
//         .then(res => res.blob())
//   .then(blob => {
//     this.setState({image:blob});
//     })
// }


    render(){
       
        return(
            <div>
                
                <img src="https://i.gifer.com/9W4A.gif" alt={this.props.name}/>
            </div>
        );
    }
}
// const ImageComponent=(props)=>(
// <div>
//     <img src={props.image} alt={props.name}/>
// </div>
// )
export default ImageComponent;