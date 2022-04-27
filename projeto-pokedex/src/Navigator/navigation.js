export const goToHomePage = (navigate) => {
  navigate(`/`);
};

export const goToPokedex = (navigate) => {
  navigate(`poke/pokedex`);
};
export const goToWildArea = (navigate) => {
  navigate(`poke/wildarea`);
};

export const goToPokeDetail = (navigate, name) => {
  navigate(`poke/details/${name}`);
};
export const goBack = (navigate) => {
  navigate(-1);
};
