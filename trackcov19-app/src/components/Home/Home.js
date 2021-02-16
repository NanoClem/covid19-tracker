import React, {Component} from 'react';
import './Home.css';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {name: props.name !== "undefined" ? props.name : ''};
    }

    render() {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
            </div>
        );
    }
}

export default Home;