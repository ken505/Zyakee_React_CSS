import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <p>- Styled Components -</p>
      <SButton> Suck my </SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  background-color: lavenderblush;
  box-shadow: 8px 8px 8px gainsboro;
  border-radius: 4px;
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: gray;
`;

const SButton = styled.button`
  color: gray;
  border: none;
  padding: 8px;
  background-color: pink;
  border-radius: 4px;
  box-shadow: 4px 4px 4px gainsboro;
  transition: all 0.2s;
  &:hover {
    background-color: rgb(252, 218, 224);
    box-shadow: 4px 4px 4px rgb(240, 240, 240);
    color: rgb(177, 177, 177);
    cursor: pointer;
  }
`;
