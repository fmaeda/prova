import React from 'react';

import { add, parseISO } from 'date-fns';
import { FaBell, FaInfoCircle, FaBellSlash } from 'react-icons/fa';

import ProgressButton from 'components/ProgressButton';
import IconButton from 'components/IconButton';
import ChatBalloon from 'components/ChatBalloon';

import {
  Container,
  BarContainer,
  TimerContainer,
  ProgressContainer,
} from './styled';
import ProgressBar from 'components/ProgressBar';
import Countdown, {
  CountdownRenderProps,
  CountdownTimeDelta,
} from 'react-countdown';
import { RootState } from 'store';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';

const mapStateToProps = ({ questao: { questaoAtual } }: RootState) => ({
  questaoAtual,
});

type Props = {} & ReturnType<typeof mapStateToProps>;

type State = {
  showNotifications: boolean;
  minFinished: boolean;
  countdown: number;
  finished: boolean;
};

class BottomBar extends React.Component<Props, State> {
  state: State = {
    showNotifications: true,
    minFinished: false,
    countdown: 0,
    finished: false,
  };

  sendRef = React.createRef<ProgressButton>();

  toggleNotifications = () => {
    this.setState(({ showNotifications }) => ({
      showNotifications: !showNotifications,
    }));
  };

  renderProgressCountdown = (tempo: number, showNotifications: boolean) => ({
    minutes,
    seconds,
  }: CountdownRenderProps) => {
    const totalSecondsRemaining = minutes * 60 + seconds;
    const prog = ((tempo - totalSecondsRemaining) / tempo) * 100;
    // console.log('prog', prog, totalSecondsRemaining);
    return showNotifications ? (
      <ProgressBar fillColor="#ea3856" progress={prog} />
    ) : null;
  };

  handleTick = ({ minutes, seconds }: CountdownTimeDelta) => {
    const total = minutes * 60 + seconds;
    if (total <= 10) {
      this.setState({ countdown: total });
    }
  };

  handleSend = (disabled: boolean, locked: boolean) => {
    // if (this.sendRef.current) {
    //   ReactTooltip.show(this.sendRef.current as any);
    // }
  };

  render() {
    const { showNotifications, minFinished, countdown, finished } = this.state;
    const { questaoAtual } = this.props;

    if (!questaoAtual) {
      return null;
    }
    const inicio = parseISO(questaoAtual.horaInicio);
    const minDate = add(inicio, { seconds: questaoAtual.tempoMinimo });
    const maxDate = add(inicio, { seconds: questaoAtual.tempoMaximo });

    return (
      <Container>
        <TimerContainer>
          <ProgressContainer>
            <ChatBalloon hidden={!showNotifications}>
              {showNotifications && `Min: ${questaoAtual.tempoMinimo}s`}
            </ChatBalloon>
            <Countdown
              key="minCountdown"
              date={minDate}
              now={() => Date.now()}
              renderer={this.renderProgressCountdown(
                questaoAtual.tempoMinimo,
                showNotifications,
              )}
              onComplete={() => this.setState({ minFinished: true })}
            />
          </ProgressContainer>
          <span />
          <ProgressContainer>
            <ChatBalloon hidden={!showNotifications}>
              {showNotifications && `Max: ${questaoAtual.tempoMaximo}s`}
            </ChatBalloon>
            {!!minFinished ? (
              <Countdown
                key="maxCountdown"
                date={maxDate}
                now={() => Date.now()}
                renderer={this.renderProgressCountdown(
                  questaoAtual.tempoMaximo - questaoAtual.tempoMinimo,
                  showNotifications,
                )}
                onTick={this.handleTick}
                onComplete={() => this.setState({ finished: true })}
              />
            ) : (
              showNotifications && (
                <ProgressBar fillColor="#ea3856" progress={0} />
              )
            )}
          </ProgressContainer>
        </TimerContainer>
        <BarContainer>
          <IconButton icon={FaInfoCircle} onClick={() => null} disabled />
          <div />
          <div />
          <ProgressButton
            onClick={this.handleSend}
            countdown={countdown}
            disabled={!minFinished || finished}
            locked={finished}
            ref={this.sendRef}
          />
          <IconButton
            icon={showNotifications ? FaBell : FaBellSlash}
            onClick={this.toggleNotifications}
          />
        </BarContainer>
        <ReactTooltip place="top" effect="solid" globalEventOff="click" />
      </Container>
    );
  }
}

export default connect(mapStateToProps)(BottomBar);
