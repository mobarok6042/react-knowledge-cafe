import './App.css'
import Header from './components/Header/Header.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Bookmarks from './components/Bookmarks/Bookmarks.jsx'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
