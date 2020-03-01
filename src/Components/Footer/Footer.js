import React from 'react';

const Footer = props => {
    return (
        <div className="footer">
            <p>Website made by Jack Rogers. Source <a target="_blank" rel="noopener noreferrer" href="https://github.com/jackdrogers/Typescript-Site">here</a>.</p>
        </div>
    )
}

export default React.memo(Footer);