import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  /* background: #2d2d2d; */
  background: linear-gradient(#fff, #ccc);
  min-height: 0;
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
  align-items: center;
  /* flex: 1; */
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
  flex: 1;
  flex-direction: column;
  padding: 0 20px;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-bottom: 48px;
  scrollbar-color: #777 transparent;

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
    border: 4px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb {
    background: #777;
    /* margin-top: 4px; */
    border-radius: 40px;
  }
  overscroll-behavior: none;
`;

export const CountdownContainer = styled.div`
  margin: 40px;
`;

export const QuestaoContainer = styled.div`
  display: flex;
  text-align: center;
  p {
    text-align: justify;
  }

  img {
    text-align: center;
    margin: 16px;
    align-self: center;
    justify-self: center;
  }
`;

export const AlternativasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;
`;
