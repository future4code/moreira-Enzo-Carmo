import React from 'react'
import Cadastro from "../pages/Cadastro"
import Login from "../pages/Login"
import Feed from '../pages/Feed'
import Post from '../pages/Post'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function routes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path={"/"} element={<Cadastro />} />
        <Route exact path={"/login"} element={<Login />} />
        <Route exact path={"/feed"} element={<Feed />} />
        <Route exact path={"/post"} element={<Post />} />
    </Routes>
    </BrowserRouter>
  )
}
