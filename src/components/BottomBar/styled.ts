import styled from 'styles';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  /* border: solid red; */
`;

export const BarContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0;
  /* padding: 20px; */
  /* color: whitesmoke; */
  /* background: linear-gradient(#fff, #ccc); */
  background: whitesmoke;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.2));
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  min-height: 21px;
  /* height: 80px; */
  /* border: solid red; */
  > span {
    width: 70px;
  }
`;

export const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  height: 20px;
  /* align-items: center; */
  > div {
    text-align: center;
    margin-bottom: 2px;
    /* align-self: center; */
  }
  /* border: solid lime; */
`;
