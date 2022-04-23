import styled from "styled-components"


export const PokeContainer = styled.div`

background-color: rgba(0, 0, 0, 0.8);

    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
    gap: 2em;

    padding: 2em;
    margin: auto;
`


export const PokeMain = styled.div`


`

export const PokeCardContainer = styled.div`


`


export const PokeArea = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 3px solid yellow;
    border-radius: 1em;
    background-color: #FFF;

    height: 50vh;
    width: 15vw;
    margin: auto;

    img {
        height: 150px;
        width: 100px;
    }
   
`

export const PokeBackArea = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 3px solid yellow;
    border-radius: 1em;
    background-color: #FFF;

    height: 50vh;
    width: 15vw;
    margin: auto;

`

export const PokeBtn = styled.div`

    button{

        font-family: "Pokefont";
        font-size: .6em;

        color: #FFF;
        background-color: rgba(0, 0, 0, 0.8);

        padding: 1em;
        margin: 1em;
        width: 12em;

        border: 1px solid #FFF;
        border-radius: 1em;

        :hover {
            color: yellow;
            border-color: yellow;
            transform: scale(1.1);
            transition: .3s;
            cursor: pointer;
        }
}
`




//  export const FlipCard = styled.div`
    
//     width: 80%;
//     justify-self: center;
 
//  `
    
  
 
// export const FlipCardInner = styled.div `

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
  
//   margin: 25px;
//   padding-top: 30px;
//   max-width: 19vw;
//   height: 48vh;
//   color: white;
//   border-radius: 10px;
//   box-shadow: 1em 1em 1em 1em rgba(36, 36, 36, 0.404);
//   transform-style: preserve-3d;
//   transition: transform 0.8s;
//   position: relative;
//   cursor: pointer;
//   transform: ${(props) =>
//     props.flippedCardId === props.pokemonId ? "rotateY(180deg)" : "none"};
// `

  
// export const FlipCardFront = styled.div `

// position: absolute;
//   backface-visibility: hidden;


// `  
// export const FlipCardBack = styled.div `

// display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   flex-direction: column;
//   transform: rotateY(180deg);
//   backface-visibility: hidden;
//   color: #30344c;

