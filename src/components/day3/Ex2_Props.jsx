import React, { Component } from 'react';

// Exercise 2: Create a class component Product that accepts title, price, and description as props and displays the product information. Set default props for title and price.

export default class Ex2_Props extends Component {
    static defaultProps = {
        title: "this is title",
        price: 123,
        description: "this is a description"
    };

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.price}</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
