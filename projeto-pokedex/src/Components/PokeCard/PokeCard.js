import React from "react";
import {
  PokeCardContainer,
  ButtonContainer,
  NameText,
  PokeImage,
} from "./styled";
const PokeCard = (props) => {
  return (
    <PokeCardContainer>
      <PokeImage src={props.pokemon.sprites[4]} alt={props.pokemon.name} />
      <NameText> {props.pokemon.name} </NameText>
      <ButtonContainer>
        <button onClick={() => props.selectPokemon(props.pokemon)}>
          Escolher
        </button>
      </ButtonContainer>
    </PokeCardContainer>
  );
};
export default PokeCard;
