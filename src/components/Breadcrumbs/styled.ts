import styled from 'styles';

type Props = {
  collapsed: boolean;
};
export const Container = styled.div<Props>`
  display: flex;
  flex-direction: ${({ collapsed }) => (collapsed ? 'row' : 'column')};
  align-self: stretch;
  position: relative;
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: visible;
  /* filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2)); */
  /* border: solid red; */
`;
