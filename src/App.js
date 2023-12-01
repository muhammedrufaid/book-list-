
import React from 'react'
import BookList from './component/BookList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav1 from './component/Nav1'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Nav1/>
     <Routes>
     <Route path="/" element={<BookList/>} />
     </Routes>
     </BrowserRouter>

   
    
    </div>
  )
}

export default App