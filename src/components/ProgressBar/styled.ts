import styled from 'styles';

type ColorProps = {
  color: string;
};
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  /* height: 8px; */
  /* width: 220px; */
`;

export const Background = styled.div<ColorProps>`
  position: absolute;
  background: ${({ color }) => color};
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
`;

type BarProps = ColorProps & {
  progress: number;
};
export const Bar = styled.div<BarProps>`
  transition: all 0.2s ease-in-out;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: ${({ progress }) => `${100 - progress}%`};
  background: ${({ color }) => color};
  /* height: 2px; */
  /* border: solid pink; */
`;
