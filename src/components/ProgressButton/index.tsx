import React from 'react';

import { FaArrowRight, FaLock } from 'react-icons/fa';
import { MdTimer, MdSend } from 'react-icons/md';

import { Container, IconContainer, Content } from './styled';

type Props = {
  countdown: number;
  disabled?: boolean;
  locked?: boolean;
  onClick: (disabled: boolean, locked: boolean) => void;
};

class ProgressButton extends React.Component<Props> {
  handleClick = () => {
    const { onClick, disabled, locked } = this.props;
    onClick(!!disabled, !!locked);
  };

  render() {
    const { disabled, countdown, locked } = this.props;

    return (
      <Container
        onClick={this.handleClick}
        disabled={disabled}
        data-tip={
          locked ? 'Tempo esgotado' : disabled ? 'Aguarde o tempo mínimo' : ''
        }
        data-event="click focus"
      >
        <Content>
          <IconContainer>
            {locked ? (
              <FaLock />
            ) : countdown > 0 ? (
              <span>{countdown}</span>
            ) : disabled ? (
              <MdTimer />
            ) : (
              <MdSend />
              // <FaArrowRight />
            )}
            {}
            {/* {collapsed ? <span>Enviar</span> : <span>30</span>} */}
          </IconContainer>
        </Content>
        {/* <ReactTooltip /> */}
      </Container>
    );
  }
}

export default ProgressButton;
