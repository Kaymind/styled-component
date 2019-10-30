import styled from "styled-components";

const CardInfo = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: #fff;

  & .name-info {
    text-align: center;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & img {
    width: 40%;
    height: 40%;
    border-radius: 50% 50%;
  }

  & h1 {
    color: rgb(117, 103, 90);
    margin-top: 20px;
  }

  & span {
    color: rgb(191, 178, 169);
    font-size: 1.4rem;
  }

  & .btn-group {
    height: 35%;
    text-align: center;
  }
`;

export default CardInfo;
