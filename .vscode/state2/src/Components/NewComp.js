import React, { Component } from 'react';
import bell from "./Bell.png";

class NewComp extends Component {
    constructor (props){
        super(props)

        this.state = {
            message: "subscribe to simplilearn",
            sub: "Subcribe",
            imageURL:bell
        };
        
    }


    styles = {
        fontStyle: "italic",
        color: "hotpink",
      };
Buttonchange =()=> {
this.setState({
    message: "Hit the bell icon to never miss an update! " ,
    sub: "Subscribed"
});
}



    render() {
        return (
            <div className = " App"> 
            <h3 style={this.styles}> {this.state.message}</h3>
                <button onClick={this.Buttonchange}> 
                {this.state.sub}
                </button>

                <p>
                    <img style={{ width:"30px", height: "30px" }}src={this.state.imageURL} alt="" /> 
                </p>

            </div>
        );
    }
}

export default NewComp;