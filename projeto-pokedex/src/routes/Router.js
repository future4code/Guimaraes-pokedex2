import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import NavbarMenu from "../Components/Aside/NavbarMenu";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import PokeDetail from "../pages/PokeDetail/PokeDetail";
import Pokedex from "../pages/Pokedex/Pokedex";

const Router = () => {
  return (
    
    <BrowserRouter>
      <Header/>
      <NavbarMenu/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route exact path="/poke/detail" element={<PokeDetail />} />
        <Route exact path="/poke/pokedex" element={<Pokedex />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};
export default Router;
