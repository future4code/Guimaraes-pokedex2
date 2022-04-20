import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
const GlobalState = (props) => {
  //Organização:
  //1) Todos os estados gerais da aplicação:
  const [getPokeByName, setGetPokeByName] = useState({});
  const [getPokeByEncounter, setGetPokeByEncounter] = useState([]);

  //2) Requisições da API:

  /* LUCAS, INSERIR OS GETs AQUI */

  //3)Organização das informações.
  //Divididas em 3 categorias para facilitar a localização dos dados nos consumers:

  const states = { getPokeByName, getPokeByEncounter };
  const setters = { setGetPokeByName, setGetPokeByEncounter };
  const requests = {
    /* LUCAS, INSERIR REQUESTS AQUI */
  };

  //4) Provider que irá receber como filhos os componentes que precisarão dessas infos:
  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
