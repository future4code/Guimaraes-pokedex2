import styled from "styled-components";

export const PokedexContent = styled.div`

    background-color: rgba(0, 0, 0, 0.8);
    padding-bottom: 1em;

    min-height: 100vh;
`

export const PokedexBox = styled.div`

    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;

    padding: 2em;
    margin: auto;
    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 900px){
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1, 1fr);

    }

    @media (max-width: 375px){
        height: auto;

    }

`

export const PokeContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.8);

    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;

    padding: 2em;
    margin: auto;
    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 900px){
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: repeat(1, 1fr);

    }

    @media (max-width: 375px){
        height: auto;

    }


`

export const PokeCardContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    height: 55vh;
    width: 43vw;
    display: flex;
    padding: 0 1em;
    box-shadow: 0 10px 10px gray;

    @media (max-width: 900px){
        width: 85vw;
        height: 70vh;


    }

    @media (max-width: 600px){
        width:  75vw;
        height: auto;
        display: flex;
        flex-direction: column;
        padding-top: 2vh;
    }

    

`

export const PokeArea = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 3px solid wheat;
    border-radius: 1em;
    background-color: gray;

    height: 50vh;
    width: 22vw;
    margin: auto;

    img {
        height: 150px;
        width: 100px;
    }

    h3 {
        color: #FFF;
        /* font-family: ; */
    }

    p > span {
        background-color: wheat;
        border-radius: 2em;
        padding: .5em;
        color: #000;
        font-family: 'Courier New', Courier, monospace;
        font-size: 1.2em;
        font-weight: 900;
    }

    button{

        font-family: 'Courier New', Courier, monospace;
        font-size: .6em;

        color: #FFF;
        background-color: rgba(0, 0, 0, 0.7);

        padding: 1em;
        margin: 1em;
        width: 12em;

        font-size: 1em;
        font-weight: bolder;

        border: 1px solid #FFF;
        border-radius: 1em;

        :hover {
            font-family: 'Courier New', Courier, monospace;
            background-color: rgba(0, 0, 0, 0.8);
            color: yellow;
            border-color: yellow;
            transition: .3s;
            cursor: pointer;
        }
    }

    @media (max-width: 900px){
        width: 35vw;
        height: 57vh;


    }
    @media (max-width: 600px){
        width: 55vw;
        height: auto;
        

        

    }

    @media (max-width: 375px){
        width: 65vw;
        height: auto;

    }
`

export const PokeBackArea = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 3px solid wheat;
    border-radius: 1em;
    background-color: gray;

    height: 50vh;
    width: 22vw;
    
    margin: auto;

    p {
        margin: .8em;
        color: #FFF;
    }

    p > span {
        font-weight: 600;
        color: wheat;
    }

    @media (max-width: 900px){
        width: 35vw;
        height: 57vh;


    }
    @media (max-width: 600px){
        width: 55vw;
        height: auto;


    }

    @media (max-width: 375px){
        width: 65vw;
        height: auto;

    }

`

export const PokeBtn = styled.div`

    button{

        font-family: 'Courier New', Courier, monospace;
        font-size: .6em;

        color: #FFF;
        background-color: rgba(0, 0, 0, 0.7);

        padding: 1em;
        margin: 1em;
        width: 12em;
        
        font-size: 1em;
        font-weight: bolder;

        border: 1px solid #FFF;
        border-radius: 1em;

        :hover {
            font-family: 'Courier New', Courier, monospace;
            background-color: rgba(0, 0, 0, 0.8);
            color: yellow;
            border-color: yellow;
            transition: .3s;
            cursor: pointer;
        }
    }
`

export const BackBtn = styled.div `

    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;


    
    font-family: "Pokefont";
    font-size: 1em;

    color: #FFF;
   
    margin: auto;
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
    
`
