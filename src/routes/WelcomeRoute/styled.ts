import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  background: #2d2d2d;
  /* flex: 1; */
  /* border: solid red; */
  width: 80%;
  height: 80%;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CountdownContainer = styled.div`
  margin: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 20px;
  > div {
    margin: 0 12px;
    padding: 8px 16px;
  }
  svg {
    margin-right: 8px;
    font-size: 16px;
  }
`;
