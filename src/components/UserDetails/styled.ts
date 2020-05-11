import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: solid red; */
  > span {
    font-weight: bold;
    margin: 4px 0;
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 300;
`;
