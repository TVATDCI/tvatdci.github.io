import React from "react";

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

        const { count, greeting } = this.props;

        console.log("I am render method in About component with the props object in the class! ", this.props);
        return (
            <div>
                <h1>About Page:</h1>
                <h4>{this.props.count}</h4>
                <h5>{this.props.greeting}</h5>
                <p>{count}</p>
            </div>
        );
    }