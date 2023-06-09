import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

// lightweight, flexible component that can optionally extend the entire viewport
//  to showcase key content on your site

class JumboTronComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Hello, world! </h1>
                    {/* to insert content into the jumbotron component from the outside we
                        use this.props.children */}
                    <p>{this.props.children}</p>
                </Jumbotron>
            </div>
        );
    }
}

export default JumboTronComponent;