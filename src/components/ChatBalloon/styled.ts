import styled from 'styles';

type Props = {
  hidden: boolean;
};
export const Container = styled.div<Props>`
  display: flex;
  align-self: center;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
`;

export const Balloon = styled.div`
  position: relative;
  top: -8px;
  text-align: center;
  background-color: whitesmoke;
  border: 4px solid #aaa;
  border-radius: 30px;
  box-shadow: 0px 0px 2px #888;
  padding: 4px 8px;
  font-weight: bold;
  color: #666;

  :before {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    transform: translateX(-50%);
    top: 27px;
    border: 6px solid;
    border-color: #aaa transparent transparent transparent;
  }
`;
