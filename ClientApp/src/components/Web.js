import React, { Component } from 'react';

export class Web extends Component {
    static displayName = Web.name;

    render () {
        return (
            <div>
                <h1>Web</h1>
                <h2>Responsive and inclusive web design projects</h2>
                <p>
                    One of the first courses I had at university was about inclusive web design
                    in HTML and CSS. It was an introduction to HTML and CSS as well as
                    UX and responsive web design. Here are a list of some of the projects.
                </p>
            </div>
        );
    }
}