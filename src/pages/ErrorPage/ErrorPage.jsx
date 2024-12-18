import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-red-600 text-center text-6xl font-extrabold pt-20'>Error page</h1>
            <br />
            <h3 className='text-center'><Link><button className='underline '>Go back to Home</button></Link></h3>
        </div>
    );
};

export default ErrorPage;