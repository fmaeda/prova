import React from 'react';
import Countdown, { CountdownRenderProps } from 'react-countdown';

import { connect } from 'react-redux';
import { GiSandsOfTime } from 'react-icons/gi';

import { Container, CountdownContainer, TimeBox } from './styled';
import { RootState } from 'store';
import { addMilliseconds, add } from 'date-fns';

const mapStateToProps = ({
  exame: { timeDiffMillis, tempoRestante },
}: RootState) => ({
  timeDiffMillis,
  tempoRestante,
});

type Props = {} & ReturnType<typeof mapStateToProps>;

class TimerProva extends React.Component<Props> {
  renderCountdown = ({ hours, minutes, seconds }: CountdownRenderProps) => {
    // console.log('data', hours);
    if (hours > 0) {
      // apresentar hh:mm
      return (
        <CountdownContainer>
          <TimeBox>{hours.toString().padStart(2, '0')}</TimeBox>:
          <TimeBox>{minutes.toString().padStart(2, '0')}</TimeBox>
        </CountdownContainer>
      );
    }
    if (minutes > 0) {
      return (
        <CountdownContainer>
          <TimeBox>{hours.toString().padStart(2, '0')}</TimeBox>:
          <TimeBox>{minutes.toString().padStart(2, '0')}</TimeBox>.
          <TimeBox>{seconds.toString().padStart(2, '0')}</TimeBox>
        </CountdownContainer>
      );
    }
    // apresentar ss em destaque
    return null;
  };

  render() {
    const { timeDiffMillis, tempoRestante } = this.props;
    if (!tempoRestante) {
      return '';
    }

    const endDate = add(addMilliseconds(new Date(), timeDiffMillis), {
      seconds: tempoRestante,
    });

    return (
      <Container>
        <GiSandsOfTime />
        <Countdown
          key="totalCountdown"
          date={endDate}
          now={() => Date.now()}
          renderer={this.renderCountdown}
          // onTick={this.handleTick(true)}
        />
      </Container>
    );
  }
}

export default connect(mapStateToProps)(TimerProva);
