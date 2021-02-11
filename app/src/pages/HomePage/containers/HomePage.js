import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import routes from "../../../routes/RoutesNames";

const HomePage = () => {
    return (
        <div className='homepage'>
            <h1>Home Page</h1>
            <Link to={ routes.counter }>
                <button className='btn_forward'>Go to Counter page</button>
            </Link>
        </div>
    );
};

export default HomePage;