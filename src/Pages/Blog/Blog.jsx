import React, { useState } from 'react';

const Blog = () => {
    // simple toggle button
    const [toggle, setToggle] = useState('Upcoming blog');
    const handleToggle = () => {
        (toggle === 'Upcoming blog') ? setToggle('Coming Soon...!') : setToggle('Upcoming blog');
        // console.log(toggle);
    }

    // element show hide state
    const [classname, setClassName] = useState(false);
    const handleClassName = () => {
        (classname === false) ? setClassName(true) : setClassName(false)
    }


    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-4xl font-bold text-rose-700'>{toggle}</h1>
            <p className={classname ? 'font-bold text-white block' : 'hidden'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, earum autem! Pariatur accusamus fugit quaerat omnis tempora rerum, commodi nemo itaque repellat obcaecati dolorum qui iusto fugiat dolore voluptatem culpa.</p>
            <div className="">

                <button onClick={handleToggle} className='btn btn-outline btn-secondary'>Change</button>
                <button onClick={handleClassName} className='btn btn-outline btn-secondary'>Toggle</button>
            </div>

        </div>
    );
};

export default Blog;