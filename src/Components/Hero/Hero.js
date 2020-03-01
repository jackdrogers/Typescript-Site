import React from 'react';

export const Hero = props => {
    return (
        <div className="hero">
            <div className="hero--image" style={{backgroundImage: `url(${props.backgroundImage})`}}></div>
            <div className="hero--overlay"></div>
            <div className="hero--text">
                <h1>{props.header}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    );
}