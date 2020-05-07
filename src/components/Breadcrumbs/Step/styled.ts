import styled from 'styles';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

type IconProps = {
  active?: boolean;
  readonly?: boolean;
};
export const IconContainer = styled.div<IconProps>`
  display: flex;
  font-size: 24px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  border: 8px solid white;
  transition: all 0.2s ease-in-out;
  ${({ active }) => !!active && `transform: scale(1.2)`};
  opacity: ${({ readonly }) => (!!readonly ? 0.25 : 1)};
  > svg {
    transition: all 0.2s ease-in-out;
    ${({ active }) => !!active && 'color: #ea3856'};
    padding: 12px;
  }
`;

export const ProgressContainer = styled.div`
  position: relative;
  width: 50px;
  height: 8px;
`;

export const ProgressBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0.25;
`;

type ProgressProps = {
  progress: number;
};
export const ProgressFill = styled.div<ProgressProps>`
  transition: all 0.2s ease-in-out;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: ${({ progress }) => `${100 - progress}%`};
  background: white;
`;
