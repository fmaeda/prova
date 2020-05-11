import styled from 'styles';

type Props = {
  active?: boolean;
};
export const Container = styled.div<Props>`
  display: flex;
  flex: 1;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  margin: 8px;
  cursor: pointer;
  user-select: none;

  :hover {
    > div {
      border-color: #ea3856;
    }
    > svg {
      color: #ea3856;
    }
  }

  > svg {
    transition: all 0.2s ease-in-out;
    font-size: 20px;
    margin-right: 12px;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 8px 12px;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  border: solid 2px silver;
  outline: none;
  *:focus {
    outline: none;
  }
`;
