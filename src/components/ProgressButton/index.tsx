import React from 'react';

import PulseLoader from 'react-spinners/PulseLoader';
import { FaLock } from 'react-icons/fa';
import { MdTimer, MdSend } from 'react-icons/md';

import {
  Container,
  IconContainer,
  Content,
  Check,
  SpinnerContainer,
} from './styled';

type Props = {
  countdown: number;
  minutes: number;
  seconds: number;
  loading: boolean;
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

  renderCheck = () => (
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
  );

  renderSendButton = () => {
    const {
      countdown,
      minutes,
      seconds,
      silent,
      locked,
      disabled,
    } = this.props;

    return (
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
        {/* {collapsed ? <span>Enviar</span> : <span>30</span>} */}
      </IconContainer>
    );
  };

  render() {
    const { disabled, locked, sent, loading } = this.props;

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
          {loading ? (
            <SpinnerContainer>
              <PulseLoader
                size={8}
                margin={2}
                color={'whitesmoke'}
                loading={loading}
              />
            </SpinnerContainer>
          ) : !!sent ? (
            this.renderCheck()
          ) : (
            this.renderSendButton()
          )}
        </Content>
      </Container>
    );
  }
}

export default ProgressButton;
