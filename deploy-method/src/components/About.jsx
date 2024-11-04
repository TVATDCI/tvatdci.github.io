import React, { Component } from "react";

function example() {
    console.log("I am example function");
}

export default class About extends Component {
    myFunction() {
        console.log("I am myFunction");
    }

    render() {
        this.myFunction();
        example();

        const { count } = this.props;

        console.log("I am render method in About component with the props object in the class! ", this.props);
        return (
            <div>
                <h2>About Page:</h2>
                <h4>{this.props.count}</h4>
                <h4>{this.props.text}</h4>
                <h3>{this.props.greeting}</h3>
                <br />

            </div>
        );
    }
}