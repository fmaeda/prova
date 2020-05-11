import React from 'react';

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
} from './styled';
import { stepActions } from 'store/steps';
import BottomBar from 'components/BottomBar';
import { questaoActions } from 'store/questao/index';
import UserDetails from 'components/UserDetails';
import TimerProva from 'components/TimerProva/index';
import { authActions } from 'store/auth';
import { add } from 'date-fns';
import { RootState } from 'store';

import AlternativaComponent from './AlternativaComponent';
import questaoMock from './questaoMock';
import { Alternativa } from 'model/questao';

const mapStateToProps = ({
  questao: { questaoAtual, alternativaSelecionada },
}: RootState) => ({
  questaoAtual,
  alternativaSelecionada,
});

type Props = {
  increment: typeof stepActions.increment;
  setQuestao: typeof questaoActions.setQuestao;
  setAlternativa: typeof questaoActions.setAlternativa;
  setDataFinalProva: typeof authActions.setDataFinalProva;
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

  componentDidUpdate() {
    if (MathJax) {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.contentRef.current]);
    }
  }

  componentDidMount() {
    const { setQuestao, setDataFinalProva } = this.props;
    setQuestao(questaoMock);
    setDataFinalProva(add(new Date(), { hours: 2 }).toISOString());
  }

  handleStartClick = () => {
    // const { history } = this.props;
    // history.push('/prova');
    const { increment } = this.props;
    increment();
  };

  handleAlternativa = (alternativa: Alternativa | null) => () => {
    console.log('alternativa', alternativa?.id);
    const { setAlternativa } = this.props;
    setAlternativa(alternativa);
  };

  render() {
    const { questaoAtual, alternativaSelecionada } = this.props;

    return (
      <Container>
        <Header>
          <Logo />
          {/* <Breadcrumbs collapsed /> */}
          <UserDetails nome="Fabiano Maeda" cpf="123.456.789-09" />
          <div style={{ flex: 1 }} />
          <TimerProva />
        </Header>
        <Content ref={this.contentRef}>
          <Title>
            <h2>{questaoAtual?.secao}</h2>
          </Title>
          <QuestaoContainer
            dangerouslySetInnerHTML={{
              __html: questaoAtual?.enunciado ?? '',
            }}
          />
          <AlternativasContainer>
            {questaoAtual?.alternativas.map((alternativa) => (
              <AlternativaComponent
                key={alternativa.id}
                content={alternativa.descricao}
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
        </Content>
        <BottomBar />
      </Container>
    );
  }
}

export default connect(mapStateToProps, {
  increment: stepActions.increment,
  setQuestao: questaoActions.setQuestao,
  setAlternativa: questaoActions.setAlternativa,
  setDataFinalProva: authActions.setDataFinalProva,
})(ProvaRoute);
