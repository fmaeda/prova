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
  border: 8px solid whitesmoke;
  width: 60px;
  height: 60px;
  overflow: hidden;
  background: #ddd;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) => (disabled ? 'rgba(0, 0, 0, 0.2)' : '#ea3856')};
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

export const ProgressContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-self: stretch;
  min-height: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
`;

type SilentProps = {
  silent?: boolean;
};
export const IconContainer = styled.div<SilentProps>`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ silent }) =>
    !silent &&
    `
    > svg {
      margin: 8px 0 -4px;
      flex: 1;
    }
    > div {
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
