import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import PokeDetail from "../pages/PokeDetail";
import Pokedex from "../pages/Pokedex";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route exact path="/poke/detail" element={<PokeDetail />} />
        <Route exact path="/poke/pokedex" element={<Pokedex />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
