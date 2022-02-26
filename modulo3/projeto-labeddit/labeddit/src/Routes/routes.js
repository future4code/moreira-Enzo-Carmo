import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaLogin from "../pages/PaginaLogin";
import PaginaPosts from "../pages/PaginaPosts";
import PaginaCadastro from "../pages/PaginaCadastro";
import PaginaFeed from "../pages/PaginaFeed";


const RoutesApp = () => { 

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PaginaLogin/>} />
                    <Route path="/feeds" element={<PaginaFeed/>} />
                    <Route path="/cadastro" element={<PaginaCadastro/>} />
                    <Route path="/posts" element={<PaginaPosts/>} />
                </Routes>
            </BrowserRouter>); 
    } 

    export default RoutesApp;