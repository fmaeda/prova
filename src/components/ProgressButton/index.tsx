import React from 'react';

import { FaLock } from 'react-icons/fa';
import { MdTimer, MdSend } from 'react-icons/md';

import { Container, IconContainer, Content, Check } from './styled';

type Props = {
  countdown: number;
  minutes: number;
  seconds: number;
  silent?: boolean;
  disabled?: boolean;
  locked?: boolean;
  sent?: boolean;
  onClick: (disabled: boolean, locked: boolean) => void;
};

class ProgressButton extends React.Component<Props> {
  handleClick = () => {
    const { onClick, disabled, locked, sent } = this.props;
    !sent && onClick(!!disabled, !!locked);
    console.log('handleClick');
  };

  render() {
    const {
      disabled,
      countdown,
      locked,
      sent,
      minutes,
      seconds,
      silent,
    } = this.props;

    return (
      <Container
        disabled={disabled || sent}
        onClick={this.handleClick}
        data-tip={
          locked ? 'Tempo esgotado' : disabled ? 'Aguarde o tempo mínimo' : ''
        }
        data-event="click focus"
        data-iscapture={!locked && !disabled && !sent}
      >
        <Content>
          {!!sent ? (
            <svg viewBox="0 0 50 50" style={{ width: '100%', height: '100%' }}>
              <Check
                fill="none"
                strokeWidth={3}
                stroke={'hsl(100, 50%, 50%)'}
                d="M14,26 L 22,33 L 35,16"
                strokeDasharray="0 1"
                transition={{ duration: 0.7 }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                // onAnimationEnd={onComplete}
              />
            </svg>
          ) : (
            <IconContainer silent={silent || locked}>
              {locked ? (
                <FaLock />
              ) : countdown > 0 ? (
                <span>{countdown}</span>
              ) : (
                <>
                  {disabled ? <MdTimer /> : <MdSend />}
                  {!silent && (
                    <div>{`${minutes
                      .toString()
                      .padStart(2, '0')}:${seconds
                      .toString()
                      .padStart(2, '0')}`}</div>
                  )}
                </>
              )}
              {}
              {/* {collapsed ? <span>Enviar</span> : <span>30</span>} */}
            </IconContainer>
          )}
        </Content>
        {/* <ReactTooltip /> */}
      </Container>
    );
  }
}

export default ProgressButton;
