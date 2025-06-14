
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog.jsx';
import propTypes from 'prop-types';


const Blogs = ({ handleAddToBookmarks , handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
    return (
        <div className="md:w-2/3">
            <h1>Blogs:{blogs.length}</h1>
            {blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                handleAddToBookmarks={handleAddToBookmarks}
                    handleMarkAsRead={handleMarkAsRead}>
            </Blog>)}
        </div>
    );
}


Blogs.proptypes = {
    handleAddToBookmarks: propTypes.func,
    handleMarkAsRead: propTypes.func
}
export default Blogs;

// I have to do prtatice very hard and continuesly to achieve the utmost success in life.