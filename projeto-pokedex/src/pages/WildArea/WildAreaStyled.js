import styled from "styled-components"


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

`

export const PokeCardContainer = styled.div`

    background-color: rgba(0, 0, 0, 0.5);
    height: 55vh;
    width: 43vw;
    display: flex;
    padding: 0 1em;

    box-shadow: 0 10px 10px gray;
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

export const PaginationBox = styled.div `

    background-color: rgba(0, 0, 0, 0.8);
    color: #FFF;

    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin: auto;

`

export const BackBtn = styled.div `

    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    button {

        font-family: "Pokefont";
        font-size: 1em;

        color: #FFF;
        background-color: rgba(0, 0, 0, 0.8);

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