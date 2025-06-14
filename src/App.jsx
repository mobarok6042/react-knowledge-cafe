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

const handleMarkAsRead = (time) => {
 const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
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
