import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  background: #2d2d2d;
  /* flex: 1; */
  /* border: solid red; */
  width: 80%;
  height: 80%;
  margin: auto;
  > div {
    margin: 8px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  flex: 1;
  /* overflow: hidden; */
`;

export const Title = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CountdownContainer = styled.div`
  margin: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  > div {
    margin: 0 12px;
    padding: 8px 16px;

    svg {
      transition: all 0.2s ease-in-out;
      margin-right: 8px;
      font-size: 20px;
    }
    :hover {
      svg {
        color: #ea3856;
      }
    }
  }
`;
