import React from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';

import CountdownItem from './CountdownItem';

import { Container } from './styled';

type Props = {
  onComplete: () => void;
};

class CountdownComponent extends React.Component<Props> {
  renderCountdown = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return (
        <p>
          Você já pode iniciar o exame. <b>Boa prova!</b>
        </p>
      );
    }
    return (
      <Container>
        {days > 0 && (
          <>
            <CountdownItem label="DIAS" value={days} />
            <span />
          </>
        )}
        <CountdownItem label="HORAS" value={hours} />
        <span>:</span>
        <CountdownItem label="MIN" value={minutes} />
        {days === 0 && (
          <>
            <span>:</span>
            <CountdownItem label="SEG" value={seconds} />
          </>
        )}
      </Container>
    );
  };

  render() {
    const { onComplete } = this.props;
    return (
      <Countdown
        date={new Date()}
        now={() => Date.now() - 10000}
        renderer={this.renderCountdown}
        onComplete={onComplete}
      />
    );
  }
}

export default CountdownComponent;
