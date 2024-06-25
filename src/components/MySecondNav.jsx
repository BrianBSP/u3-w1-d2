import { Component } from "react";

class MySecondNav extends Component {
    render(){
        return(
            <div>
                <h3>{this.props.customNav}</h3>
            </div>
        )
    }
}

export default MySecondNav