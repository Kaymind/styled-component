import styled from "styled-components";

const Card = styled.div`
width:40%;
height:33%;
color: rgb(117,103,90);
font-size: 3rem;
font-weight: bold;
display:flex;
flex-direction: column;
justify-content: center;
align-items:center
background-color: rgb(245,232,223);

& .word {
    color: rgb(191,178,169);
    font-size: 2rem;
    font-weight: normal;
}
`;

export default Card;
