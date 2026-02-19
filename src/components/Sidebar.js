import React from 'react';
import './Sidebar.css';

function Sidebar()
{
        return(
        <div className="sidebar">
        <h3>Menu</h3>
        <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
        </ul>
        </div>
        )
}

export default Sidebar;