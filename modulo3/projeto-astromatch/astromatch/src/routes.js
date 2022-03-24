import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Matches from './pages/Matches'
export default function routesApp() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element= {<Home />} />
    <Route path="/matches" element= {<Matches />} />
    </Routes>
    </BrowserRouter>
  )
}
