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
  padding-left: 12px;
  cursor: ${({ active }) => (!!active ? 'unset' : 'pointer')};
  user-select: none;
  /* background: whitesmoke; */
  background: #ffffff;
  border-radius: 8px;
  /* filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2)); */
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  > svg {
    transition: all 0.2s ease-in-out;
    font-size: 20px;
    margin-right: 12px;
  }
  ${({ active }) =>
    active &&
    `
    /* background: #F4F3FB; */
    background: white;
    > div {
      /* border-color: #ea3856; */
    }
    > svg {
      color: #ea3856;
    }
  `};

  :hover {
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.1);
    transform: translateX(-2px) translateY(-2px);
    > div {
      /* border-color: #ea3856; */
    }
    > svg {
      color: #ea3856;
    }
  }
`;

export const Content = styled.div<Props>`
  flex: 1;
  display: flex;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
  /* margin: 8px; */
  padding: 0px 12px;
  margin: 12px 0;
  transition: all 0.2s ease-in-out;
  /* border-left: solid 2px ${({ active }) => (active ? `#ea3856` : '#CCC')}; */
  border-left: solid 1px #CCC;
  /* border-radius: 4px; */
  /* border: solid 2px silver; */
  /* background: whitesmoke; */

  /* box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.2); */
  * {
    :focus {
      outline: none;
    }
  }
`;
