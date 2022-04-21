import styled from "styled-components";

export const HomeBox = styled.div`

    min-height: 100vh;
    width: auto;

    text-align: center;
`

export const HomePageBg = styled.div`

    position: absolute;
    top: 0;
`

export const VideoBg = styled.video`

    position: fixed;
    width: 110%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`

export const InfoBox = styled.div`

    max-height: 35em;
    width: 40vw;
    border: 1px solid yellow;
    border-radius: 1em;
    margin: 3em auto;
    padding: 0 1em 1em 1em;
    background-color: rgba(0, 0, 0, 0.8);

    h3 {
        font-family: "Pokefont";
        color: #FFF;
        font-size: 2.5em;
    }

    span {
        font-family: "Pokefont";
        color: yellow;

        -webkit-animation-name: blinker;
        -webkit-animation-duration: 1s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-name: blinker;
        -moz-animation-duration: 1s;
        -moz-animation-timing-function: linear;
        -moz-animation-iteration-count: infinite;
        animation-name: blinker;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        @-moz-keyframes blinker {
            0% {
                opacity: 1.0;
            }
            50% {
                opacity: 0.0;
            }
            100% {
                opacity: 1.0;
            }
        }
        
        @-webkit-keyframes blinker {
            0% {
                opacity: 1.0;
            }
            50% {
                opacity: 0.0;
            }
            100% {
                opacity: 1.0;
            }
        }

        @keyframes blinker {
            0% {
                opacity: 1.0;
            }
            50% {
                opacity: 0.0;
            }
            100% {
                opacity: 1.0;
            }
        }
    }

    h5 {
        color: #FFF;
        font-size: 1.8em;
    }

`

export const BtnStyled = styled.button`


    font-family: "Pokefont";
    font-size: 1em;

    color: #FFF;
    background-color: rgba(0, 0, 0, 0.8);

    padding: 1em;
    margin: 1em;
    width: 15em;

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
