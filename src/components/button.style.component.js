import styled from "styled-components";

const ButtonComponent = styled.button`
  color: rgb(117, 103, 90);
  font-size: 2rem;
  font-weight: bold;
  padding: 15px 40px;
  min-width: 250px;
  min-height: 50px;
  border: 2px solid rgb(117, 103, 90);
  border-radius: 40px;
  text-aligh: center;
  margin: 10px;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

export default ButtonComponent;
