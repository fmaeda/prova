import React from 'react';

import { add, parseISO } from 'date-fns';
import { FaBell, FaInfoCircle, FaBellSlash } from 'react-icons/fa';

import ProgressButton from 'components/ProgressButton';
import IconButton from 'components/IconButton';

import {
  Container,
  BarContainer,
  TimerContainer,
  ProgressContainer,
  MainButtonContainer,
} from './styled';
import ProgressBar from 'components/ProgressBar';
import Countdown, {
  CountdownRenderProps,
  CountdownTimeDelta,
} from 'react-countdown';
import { RootState } from 'store';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { questaoThunks } from 'store/questao';
import { ThunkActionDispatch } from 'redux-thunk';
import { exameActions } from 'store/exame';

const mapStateToProps = ({
  questao: { questaoAtual },
  exame: { showNotifications },
  request: { loading },
}: RootState) => ({
  questaoAtual,
  showNotifications,
  loading,
});

type Props = {
  onSendComplete: () => void;
  onTimeout: () => void;
  toggleNotifications: typeof exameActions.toggleNotifications;
  sendResposta: ThunkActionDispatch<typeof questaoThunks.sendResposta>;
} & ReturnType<typeof mapStateToProps>;

type State = {
  minFinished: boolean;
  countdown: number;
  finished: boolean;
  sent: boolean;
  minutes: number;
  seconds: number;
};

class BottomBar extends React.Component<Props, State> {
  state: State = {
    minFinished: false,
    countdown: 0,
    finished: false,
    sent: false,
    minutes: 0,
    seconds: 0,
  };

  maxCountdownRef = React.createRef<Countdown>();

  toggleNotifications = () => {
    const { toggleNotifications } = this.props;
    toggleNotifications();
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

  handleTick = (countdown: boolean) => ({
    minutes,
    seconds,
  }: CountdownTimeDelta) => {
    const total = minutes * 60 + seconds;
    this.setState({ minutes, seconds });
    if (countdown && total <= 10) {
      this.setState({ countdown: total });
    }
  };

  handleSend = (disabled: boolean, locked: boolean) => {
    if (!disabled && !locked) {
      console.log('sent');
      const { onSendComplete, sendResposta } = this.props;
      this.setState({ sent: true });
      sendResposta().then(() => {
        onSendComplete();
        this.setState({
          minFinished: false,
          countdown: 0,
          finished: false,
          sent: false,
          minutes: 0,
          seconds: 0,
        });
      });
      // if (!this.maxCountdownRef.current?.isPaused()) {
      //   this.maxCountdownRef.current?.pause();
      // }
    } else {
      console.log('disabled/locked', disabled, locked);
    }
  };

  render() {
    const {
      minFinished,
      countdown,
      finished,
      sent,
      minutes,
      seconds,
    } = this.state;
    const { questaoAtual, showNotifications, onTimeout, loading } = this.props;

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
            <Countdown
              key="minCountdown"
              date={minDate}
              now={() => Date.now()}
              renderer={this.renderProgressCountdown(
                questaoAtual.tempoMinimo,
                showNotifications,
              )}
              onTick={this.handleTick(false)}
              onComplete={() => {
                this.setState({ minFinished: true, minutes: 0, seconds: 0 });
              }}
            />
          </ProgressContainer>
          <span />
          <ProgressContainer>
            {!!minFinished ? (
              <Countdown
                key="maxCountdown"
                date={maxDate}
                now={() => Date.now()}
                renderer={this.renderProgressCountdown(
                  questaoAtual.tempoMaximo - questaoAtual.tempoMinimo,
                  showNotifications,
                )}
                onTick={this.handleTick(true)}
                ref={this.maxCountdownRef}
                onComplete={() => {
                  this.setState({ finished: true });
                  onTimeout();
                }}
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
          {/* <div /> */}
          {/* <div /> */}
          <MainButtonContainer>
            <ProgressButton
              onClick={this.handleSend}
              countdown={countdown}
              disabled={!minFinished || finished}
              locked={finished}
              sent={sent}
              minutes={minutes}
              seconds={seconds}
              silent={!showNotifications}
              loading={loading}
            />
          </MainButtonContainer>
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

export default connect(mapStateToProps, {
  sendResposta: questaoThunks.sendResposta,
  toggleNotifications: exameActions.toggleNotifications,
})(BottomBar);
