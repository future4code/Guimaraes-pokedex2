import React from "react";
import {
  DetailContainer,
  DetailImage,
  TextContainer,
  NameText,
} from "./styled";
const PokeDetailsList = (props) => {
  return (
    <DetailContainer>
      <DetailImage /* src={} alt={} */ />
      <TextContainer>
        <NameText></NameText>
      </TextContainer>
      <button>Excluir</button>
    </DetailContainer>
  );
};
export default PokeDetailsList;
