import Proptypes from 'prop-types'

const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};
Blog.propTypes ={
    blog: Proptypes.object.isRequired
}
export default Blog;