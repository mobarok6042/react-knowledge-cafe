import './App.css'
import Header from './components/Header/Header.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Bookmarks from './components/Bookmarks/Bookmarks.jsx'
import { useState } from 'react'

function App() {
const [bookmarks,setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);

const handleAddToBookmarks = (blog) => {
const newBookmarks = [...bookmarks,blog];
setBookmarks(newBookmarks);
}

const handleMarkAsRead = (id, time) => {
 const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
//remove the read blog from bookmarks
//console.log('remove bookmark',id)
const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
setBookmarks(remainingBookMarks);
}


  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto gap-5'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
