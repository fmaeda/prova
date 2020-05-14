import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  /* background: #2d2d2d; */
  background: linear-gradient(#f2f3f8, #fff);
  min-height: 0;
  flex: 1;
  box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.3);
  /* border: solid lime; */

  @media only screen and (min-width: 768px) {
    margin: 40px 0;
    /* border-radius: 4px; */
    overflow: hidden;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  padding: 12px 0;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);
  /* flex: 1; */
  /* background: linear-gradient(#383838, #878787); */
  /* background: #201f2a; */
  background: whitesmoke;
  /* color: rgba(255, 255, 255, 0.7); */
  color: rgba(0, 0, 0, 0.7);
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
  /* border: solid red; */
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 20px;
  overflow-x: none;
  overflow-y: auto;
  /* border: solid orange; */
  padding-bottom: 48px;
  /* margin-bottom: 12px; */
  scrollbar-color: gray transparent;

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
    border: 4px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb {
    background: #aaa;
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
  flex: 1;
  text-align: center;
  p {
    text-align: justify;
  }

  img {
    max-width: 80%;
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
  /* border: solid lime; */
  /* flex: 1; */
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  /* flex: 1; */
  min-height: 1px;
  width: 100%;
  margin: 20px 0;
  /* border: solid lime; */
  background: silver;
`;
