import styled from 'styles';
import { motion } from 'framer-motion';

type Props = {
  disabled?: boolean;
};
export const Container = styled.div<Props>`
  transition: all 0.15s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 900px;
  /* border: 8px solid whitesmoke; */
  border: 8px solid #5b5b5b;
  width: 60px;
  height: 60px;
  overflow: hidden;
  /* background: #ddd; */
  background: #383838;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) =>
    disabled ? 'rgba(255, 255, 255, 0.2)' : '#ea3856'};
  font-size: ${({ disabled }) => (disabled ? '32px' : '24px')};
  font-weight: bold;

  :active {
    ${({ disabled }) =>
      !disabled &&
      `
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
    `};
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

type SilentProps = {
  silent?: boolean;
};
export const IconContainer = styled.div<SilentProps>`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  ${({ silent }) =>
    !silent &&
    `
    > svg {
      align-self: center;
      margin: 8px 0 -4px;
      flex: 1;
      /* border: solid 1px lime; */
    }
    > div {
      text-align: center;
      margin: 4px 0 8px;
      font-weight: 600;
      font-size: 10px;
      color: gray;
    }
  `};
`;

export const CounterContainer = styled.div`
  display: flex;
  /* flex: 1; */
  align-self: stretch;
  flex-direction: row;
  border: solid red;
`;

export const Check = styled(motion.path)``;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  /* border: solid lime; */
  /* flex: 1; */
  /* align-self: stretch; */
  /* background: blue; */
  width: 50px;
  height: 50px;
  > * {
    /* border: solid red 1px; */
    /* margin-left: 10px; */
  }
`;
