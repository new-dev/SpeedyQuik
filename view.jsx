import React, {Component} from 'react';

export default class HelloWorld extends Component {
    render() {
        return <h1>Hello there from {this.props.phrase}!</h1>;
    }
}
