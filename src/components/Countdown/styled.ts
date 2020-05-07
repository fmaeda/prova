import styled from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  > span {
    margin-bottom: 20px;
    font-size: 20px;
    min-width: 4px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    margin-top: 8px;
    font-size: 12px;
    /* font-weight: bold; */
    text-align: center;
  }
  // border: solid blue;
`;

export const FlipPanel = styled.div`
  display: flex;
  background: #f2f2f2;
  font-weight: 300;
  font-size: 42px;
  line-height: 60px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #ea3856;
  width: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);

  margin: 0 5px;
  border-radius: 4px;

  animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    both;

  @keyframes flip-horizontal-bottom {
    0% {
      transform: rotateX(180deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      opacity: 1;
    }
  }
`;
