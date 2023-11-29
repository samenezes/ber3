import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Done, Deleted } from './pages'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/adicionadas" element={<Done />} />
      <Route path="/excluidas" element={<Deleted />} />
    </Routes>
  )
}