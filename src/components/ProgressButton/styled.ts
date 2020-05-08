import styled from 'styles';

type Props = {
  disabled?: boolean;
};
export const Container = styled.div<Props>`
  position: absolute;
  left: 50%;
  transition: all 0.15s ease-in-out;
  transform: translateX(-50%);
  top: -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 900px;
  /* border: 8px solid ${({ disabled }) =>
    disabled ? 'whitesmoke' : '#ea3856'}; */
  border: 8px solid whitesmoke;
  width: 60px;
  height: 60px;
  overflow: hidden;
  /* border: solid red; */
  /* min-width: 52px; */
  /* background: linear-gradient(#bbb, #777); */
  /* background: #ea3856; */
  background: silver;
  color: ${({ disabled }) =>
    disabled ? 'rgba(255, 255, 255, 0.4)' : '#ea3856'};
  /* box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.2); */
  font-size: ${({ disabled }) => (disabled ? '32px' : '24px')};
  font-weight: bold;

  :active {
    ${({ disabled }) =>
      !disabled &&
      `
      background: #aaa;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
    `};
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 6px;
  align-self: stretch;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CounterContainer = styled.div`
  display: flex;
  /* flex: 1; */
  align-self: stretch;
  flex-direction: row;
  border: solid red;
`;
