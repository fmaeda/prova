import React from 'react';

import Media from 'react-media';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from 'components/Logo';
import {
  Container,
  Content,
  Title,
  Header,
  QuestaoContainer,
  AlternativasContainer,
  Divider,
} from './styled';
import { stepActions } from 'store/steps';
import BottomBar from 'components/BottomBar';
import { questaoActions } from 'store/questao/index';
import UserDetails from 'components/UserDetails';
import TimerProva from 'components/TimerProva/index';
import { RootState } from 'store';
import { ThunkActionDispatch } from 'redux-thunk';
import { questaoThunks } from 'store/questao';

import AlternativaComponent from './AlternativaComponent';
import { Alternativa } from 'model/questao';
// import Breadcrumbs from 'components/Breadcrumbs';
import CompletionMeter from 'components/CompletionMeter';
import { exameActions } from 'store/exame/index';

const mapStateToProps = ({
  questao: { questaoAtual, alternativaSelecionada },
  auth: { nome, cpf },
}: RootState) => ({
  questaoAtual,
  alternativaSelecionada,
  nome,
  cpf,
});

type Props = {
  increment: typeof stepActions.increment;
  setQuestao: typeof questaoActions.setQuestao;
  setAlternativa: typeof questaoActions.setAlternativa;
  setExame: typeof exameActions.setExame;
  fetchQuestao: ThunkActionDispatch<typeof questaoThunks.fetchQuestao>;
} & RouteComponentProps &
  ReturnType<typeof mapStateToProps>;

type State = {
  collapsed: boolean;
};
class ProvaRoute extends React.Component<Props, State> {
  state: State = {
    collapsed: false,
  };

  contentRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    // const { setQuestao, setExame } = this.props;
    // setQuestao(questaoMock);
    // setExame({
    //   horarioServidor: new Date().toISOString(),
    //   respondidas: 20,
    //   restantes: 30,
    //   tempoRestante: 1600,
    // });
    // this.updateMathjax();
    this.loadQuestao();
  }

  loadQuestao = () => {
    const { fetchQuestao } = this.props;
    fetchQuestao().then(() => {
      this.updateMathjax();
    });
  };

  updateMathjax = () => {
    if (MathJax) {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.contentRef.current]);
    }
  };

  handleAlternativa = (alternativa: Alternativa | null) => () => {
    // console.log('alternativa', alternativa?.id);
    const { setAlternativa } = this.props;
    setAlternativa(alternativa);
  };

  handleTimeout = () => {
    this.loadQuestao();
  };

  render() {
    const { questaoAtual, alternativaSelecionada, nome, cpf } = this.props;

    return (
      <Container>
        <Header>
          <Logo />
          <UserDetails nome={nome} cpf={cpf} />
          <div style={{ flex: 1 }} />
          <TimerProva />
        </Header>
        <CompletionMeter />
        {/* <Breadcrumbs collapsed /> */}
        <Content ref={this.contentRef}>
          <div>
            <Title>
              <h2>{questaoAtual?.secao}</h2>
            </Title>
            <QuestaoContainer
              dangerouslySetInnerHTML={{
                __html: questaoAtual?.enunciado ?? '',
              }}
            />
            <Divider />
            <AlternativasContainer>
              {questaoAtual?.alternativas.map((alternativa) => (
                <AlternativaComponent
                  key={alternativa.id}
                  content={alternativa.descricao}
                  // content={String.raw`<p>Teste</p>`}
                  active={alternativaSelecionada?.id === alternativa.id}
                  onClick={this.handleAlternativa(alternativa)}
                />
              ))}
              <AlternativaComponent
                content={String.raw`<p>Deixar em branco</p>`}
                onClick={this.handleAlternativa(null)}
                active={alternativaSelecionada === null}
              />
            </AlternativasContainer>
            <Media
              query="(max-width: 599px)"
              render={() => <div style={{ height: 120 }} />}
            />
          </div>
        </Content>
        <BottomBar
          key={questaoAtual?.horaInicio}
          onTimeout={this.handleTimeout}
          onSendComplete={this.updateMathjax}
        />
      </Container>
    );
  }
}

export default connect(mapStateToProps, {
  increment: stepActions.increment,
  setQuestao: questaoActions.setQuestao,
  setAlternativa: questaoActions.setAlternativa,
  setExame: exameActions.setExame,
  fetchQuestao: questaoThunks.fetchQuestao,
})(ProvaRoute);
