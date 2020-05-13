import styled from 'styles';

export const Container = styled.div`
  display: flex;
  /* flex: 1; */
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  margin: 12px;
  font-size: 18px;
  font-weight: 300;

  > svg {
    font-size: 24px;
    /* color: rgba(255, 255, 255, 0.5); */
    color: rgba(0, 0, 0, 0.7);
    margin: 0 12px;
  }

  /* border: solid red; */
`;

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TimeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 24px;
`;
