import React, { useState } from 'react';

const Blog = () => {
    const [toggle, setToggle] = useState('Upcoming blog');
    const handleToggle = () => {
        let value = toggle;
        (value === 'Upcoming blog') ? setToggle('Upcoming blog') : setToggle('Coming Soon...!');
        // if (value === 'Upcoming blog') {
        //     setToggle('Coming Soon...!');
        // } else {
        //     setToggle('Upcoming blog');
        // }
        console.log(toggle);
    }
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-4xl font-bold text-rose-700'>{toggle}</h1>
            <button onClick={handleToggle} className='btn btn-outline btn-secondary'>Change</button>
        </div>
    );
};

export default Blog;