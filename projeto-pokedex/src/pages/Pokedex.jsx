import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedex, goToPokeDetail } from "../Navigator/navigation";
const Pokedex = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Esta é sua Pokedex</h3>
    </div>
  );
};
export default Pokedex;
