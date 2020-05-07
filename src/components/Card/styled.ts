import styled from 'styles';

type Props = {
  flex?: 'none' | number;
  background?: string;
};
export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.5);
  background: ${({ background = 'linear-gradient(#8da0ad, #64737a)' }) =>
    background};
  flex: ${({ flex = 'none' }) => flex};
`;
