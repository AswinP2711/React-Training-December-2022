import React, { Component } from 'react';

class ClassProps extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Hai {this.props.name} from {this.props.place}</h1>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
 
export default ClassProps;