import styled from "styled-components";


export const FooterContainer = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1em;
    height: 6vh;
    border: 3px solid black;
    padding: .5em;

    background-color: #CD2026;

    img {
        width: 45px;
        border: 3px  solid #FFF;
        border-radius: 5em;
        margin-left: .2em;
      

        :hover {
            cursor: pointer;
            transform: scale(1.1);
            transition: .3s;
            border: 3px  solid yellow;
        }
    }

    p {
        color: #FFF;
        font-family: 'Roboto Mono', monospace;;
        font-size: 1em;
        margin: auto;
    }

    p > span {
        cursor: pointer;
        :hover {
            color: yellow;
        }
    }

`