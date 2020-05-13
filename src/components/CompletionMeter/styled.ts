import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background: #282732;
  background: #2d2d2d;
  padding: 12px;
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  /* margin: 0 -4px; */
  overflow: hidden;

  /* border: solid red; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  /* width: 80%; */
  margin: 0 8px;
  /* border: solid red; */
  align-items: center;
  justify-content: center;
`;

export const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  background: silver;
  flex: 1;
  height: 4px;
  border-radius: 10px;
  margin: 0 4px;
`;

type ProgProps = {
  progress: number;
};
export const ProgressBar = styled.div<ProgProps>`
  display: flex;
  position: absolute;
  border-radius: 10px;
  top: 0;
  left: 0;
  bottom: 0;
  right: ${({ progress }) => `${100 - progress}%`};
  background: #ea3856;
`;
