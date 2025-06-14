import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark.jsx";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3  bg-gray-300 ml-4 mt-4 pt-4 ronded-lg">
            <div>
                <h1 className="text-3xl text-center mb-4">Total Reading Time: {readingTime} min</h1>
            </div>
            <h1 className="text-3xl text-center">Bookmarked Blogs:{bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};


Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;