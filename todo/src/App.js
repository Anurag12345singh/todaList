import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Register from '../src/components/Register'
import Login from '../src/components/Login'
import Todo from './components/Todo'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>        
        <Route path= '/' element={<Register/>}></Route>
        <Route path= '/login' element={<Login/>}></Route>
        <Route path= '/todo' element={<Todo/>}></Route>
      </Routes>
       </BrowserRouter>

    </div>
  )
}

export default App
