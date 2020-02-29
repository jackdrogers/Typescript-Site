import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = props => {
    return (
        <li>
            <NavLink activeClassName="active" className="navigation--items--item" to={props.url}>{props.text}</NavLink>
        </li >
    )
}

export default React.memo(NavItem);