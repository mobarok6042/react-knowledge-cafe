import propTypes from 'prop-types'
import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog }) => {
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-md' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className="flex ">
                    <img className="w-14 rounded-full" src={author_img} alt="" />
                    <div clasName="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read.</span>
                    <button className='ml-2 text-red-400 text-2xl'><BsBookmark></BsBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map(
                        (hash, idx) => <span key={idx}><a href="">{hash}</a></span>
                    )
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: propTypes.object.isRequired
}
export default Blog;