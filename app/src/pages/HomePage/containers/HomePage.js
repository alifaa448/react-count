import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import routes from "../../../routes/routesNames";

const HomePage = () => {
    return (
        <div className='homepage'>
            <h1>Home Page</h1>
            <Link to={routes.COUNTER}>
                <button className='btn btn_red'>Go to Counter page</button>
            </Link>
            <Link to={routes.TOTAL_COUNTERS}>
                <button className='btn btn_blue'>Go to Counters page</button>
            </Link>
            <Link to={routes.TODO_LIST}>
                <button className='btn btn_green'>Go to Todo List page</button>
            </Link>
        </div>
    );
};

export default HomePage;