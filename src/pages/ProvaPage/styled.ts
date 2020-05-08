import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  /* background: #2d2d2d; */
  background: linear-gradient(#fff, #ccc);
  flex: 1;
  @media only screen and (min-width: 768px) {
    margin: 40px 0;
    border-radius: 4px;
    overflow: hidden;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  flex: 1;
  background: linear-gradient(#bbb, #777);
  /* overflow: hidden; */
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex: 9;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(#fff, #ccc); */
`;

export const CountdownContainer = styled.div`
  margin: 40px;
`;
