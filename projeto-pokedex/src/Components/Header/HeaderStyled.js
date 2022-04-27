import styled from "styled-components";


export const NavbarMenu = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    height: 9vh;

    border: 3px solid black;
    padding: .5em;

    background-color: #CD2026;

    img {
        width: 50px;
        padding-right: 1em;

        :hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }

    h2 {
        font-family: "Pokefont";
        font-size: 1.3em;
        color: #fff;
        

        :hover {
            cursor: pointer;
            color: yellow;
        }
    }

    a {
        text-decoration: none;
    }
`
