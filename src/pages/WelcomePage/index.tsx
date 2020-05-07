import React from 'react';

import { AnimatePresence } from 'framer-motion';
import {
  Container,
  Content,
  CountdownContainer,
  ButtonContainer,
  Title,
  Header,
} from './styled';
import Card from 'components/Card';
import Countdown from 'components/Countdown';
import { FaChalkboardTeacher, FaRegPlayCircle } from 'react-icons/fa';
import Button from 'components/Button';
import { RouteComponentProps } from 'react-router-dom';
import Logo from 'components/Logo';
import Breadcrumbs from 'components/Breadcrumbs';

type Props = {} & RouteComponentProps;
type State = {
  ready: boolean;
};

class WelcomeRoute extends React.Component<Props, State> {
  state: State = {
    ready: false,
  };

  handleComplete = () => {
    this.setState({
      ready: true,
    });
  };

  handleTutorialClick = () => {
    console.log('tutorial');
  };

  handleStartClick = () => {
    const { history } = this.props;
    history.push('/prova');
    console.log('start');
  };

  render() {
    const { ready } = this.state;

    return (
      <Container>
        <Card flex={1} background="linear-gradient(#ccc, #777)">
          <Header>
            <Logo />
          </Header>
        </Card>
        <Card flex={9} background="linear-gradient(#fff, #ccc)">
          <Title>
            <h2>
              Olá <i>Fabiano Maeda</i>, bem vindo!
            </h2>
          </Title>
          <Content>
            {!!ready ? (
              <>
                <p>
                  Você já pode iniciar o exame. <b>Boa prova!</b>
                </p>
              </>
            ) : (
              <>
                <p>Sua prova será iniciada em...</p>
                <CountdownContainer>
                  <Countdown onComplete={this.handleComplete} />
                </CountdownContainer>
                <p>
                  Enquanto isso, você pode se familiarizar com o sistema através
                  do Tutorial.
                </p>
              </>
            )}
          </Content>
          <ButtonContainer>
            <AnimatePresence>
              <Button onClick={this.handleTutorialClick}>
                <FaChalkboardTeacher /> Tutorial
              </Button>
              {!!ready && (
                <Button onClick={this.handleStartClick}>
                  <FaRegPlayCircle /> Iniciar Prova
                </Button>
              )}
            </AnimatePresence>
          </ButtonContainer>
        </Card>
      </Container>
    );
  }
}

export default WelcomeRoute;
