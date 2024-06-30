import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(x => x);

    return (
        <div className="breadcrumb">
            <img src="Logo/home.png" height={"24px"}  width={"24px"} alt="Home" className="breadcrumb-logo" />
            
            {paths.map((path, index) => (
                <React.Fragment key={index}>
                    {' / '}
                    <Link to={`/${paths.slice(0, index + 1).join('/')}`}>{path}</Link>
                </React.Fragment>
            ))}
            <Link to="/">Home / </Link>
            <p className="breadcrumb-text">Account Settings</p>
        </div>
    );
};

export default Breadcrumb;
