import styled from 'styles';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  /* border: solid red; */
`;

export const BarContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0;
  /* background: whitesmoke; */
  background: linear-gradient(#383838, #5b5b5b);
  /* background: #383838; */
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.2));
  > div {
    flex: 1;
    /* border: solid red; */
    align-items: center;
    justify-content: center;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
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
  min-height: 2px;
  background: silver;
  > div {
    text-align: center;
    margin-bottom: 2px;
  }
  /* border: solid lime; */
`;

export const MainButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  top: -30px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
`;
