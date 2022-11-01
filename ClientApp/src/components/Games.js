import React, { Component } from 'react';

export class Games extends Component {
    static displayName = Games.name;

    render () {
        return (
            <div>
                <h1>Games</h1>
                <h2><a href="https://github.com/vetlelg/sfml-snake">Snake in C++ with SFML</a></h2>
                <h2><a href="https://github.com/vetlelg/snake-libgdx">Snake in Java with libGDX</a></h2>
            </div>
        );
    }
}