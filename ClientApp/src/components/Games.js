import React, { Component } from 'react';

export class Games extends Component {
    static displayName = Games.name;

    render () {
        return (
            <div>
                <h1>Games</h1>
                <h2><a href="https://github.com/vetlelg/sfml-snake">Snake in C++ with SFML</a></h2>
                <p>
                    Created a simple version of Snake with SFML written in C++.
                    C++ was my first experience with object oriented programming and
                    this was my first "big" project when learning C++. SFML stands for Simple and Fast Multimedia Library.
                    With SFML you can, among other things, draw simple stuff to the screen and make simple games from scratch.
                </p>
                <h2><a href="https://github.com/vetlelg/snake-libgdx">Snake in Java with libGDX</a></h2>
                <p>
                    I made this project when learning basic object oriented programming in Java at university.
                    libGDX is a cross-platform game development framework. It's mainly for simple 2D games,
                    but also has 3D functionality.
                </p>
            </div>
        );
    }
}