import React from 'react';

import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from 'components/Logo';
import { Container, Content, Title, Header } from './styled';
import { stepActions } from 'store/steps';
import BottomBar from 'components/BottomBar';
import { questaoActions } from 'store/questao/index';

type Props = {
  increment: typeof stepActions.increment;
  setQuestao: typeof questaoActions.setQuestao;
  setAlternativa: typeof questaoActions.setAlternativa;
} & RouteComponentProps;

type State = {
  collapsed: boolean;
};
class ProvaRoute extends React.Component<Props, State> {
  state: State = {
    collapsed: false,
  };

  componentDidMount() {
    const { setQuestao, setAlternativa } = this.props;
    setQuestao({
      enunciado: 'Questao teste...',
      horaInicio: new Date().toISOString(),
      tempoMinimo: 10, // 1 min
      tempoMaximo: 60, // 3 min
      alternativas: [],
    });
    setAlternativa(null);
  }

  handleStartClick = () => {
    // const { history } = this.props;
    // history.push('/prova');
    const { increment } = this.props;
    increment();
  };

  render() {
    return (
      <Container>
        <Header>
          <Logo />
          {/* <Breadcrumbs collapsed /> */}
          <div>
            <span>Fabiano Maeda</span>
            <span>CPF: 123,456.789-09</span>
          </div>
        </Header>
        <Content>
          <Title>
            <h2>Seção...</h2>
          </Title>
          <span>Questão...</span>
          <span>Alternativas...</span>
        </Content>
        <BottomBar />
      </Container>
    );
  }
}

export default connect(null, {
  increment: stepActions.increment,
  setQuestao: questaoActions.setQuestao,
  setAlternativa: questaoActions.setAlternativa,
})(ProvaRoute);
