import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import Card from 'components/Card';
import { MdSend } from 'react-icons/md';
import Button from 'components/Button';
import Logo from 'components/Logo';
import Breadcrumbs from 'components/Breadcrumbs';
import { Container, Content, ButtonContainer, Title, Header } from './styled';
import { stepActions } from 'store/steps';

type Props = {
  increment: typeof stepActions.increment;
} & RouteComponentProps;

class WelcomeRoute extends React.Component<Props> {
  handleStartClick = () => {
    // const { history } = this.props;
    // history.push('/prova');
    const { increment } = this.props;
    increment();
  };

  render() {
    return (
      <Container>
        <Card flex={1} background="linear-gradient(#ccc, #777)">
          <Header>
            <Logo />
            <Breadcrumbs collapsed />
          </Header>
        </Card>
        <Card flex={9} background="linear-gradient(#fff, #ccc)">
          <Title>
            <h2>Seção...</h2>
          </Title>
          <Content>Questão...</Content>
          <Content>Alternativas...</Content>
        </Card>
        <Card background="linear-gradient(#ccc, #777)">
          <ButtonContainer>
            <AnimatePresence>
              <Button onClick={this.handleStartClick}>
                <MdSend /> Próxima
              </Button>
            </AnimatePresence>
          </ButtonContainer>
        </Card>
      </Container>
    );
  }
}

export default connect(
  null,
  {
    increment: stepActions.increment,
  },
)(WelcomeRoute);
