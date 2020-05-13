import styled from 'styles';

type Props = {
  disabled?: boolean;
};
export const Container = styled.div<Props>`
  display: flex;
  color: rgba(255, 255, 255, 0.5);
  > svg {
    font-size: 28px;
  }
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
