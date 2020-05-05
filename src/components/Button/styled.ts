import styled from 'styles';

type Props = {
  disabled?: boolean;
};
export const Container = styled.div<Props>`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 8px;
  background: whitesmoke;
  margin: 4px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.5);
  user-select: none;
  transition: all 0.1s ease-in-out;

  :active {
    background: #aaa;
  }
`;
