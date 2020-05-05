import React from 'react';

import {
  Container,
  Content,
  CountdownContainer,
  ButtonContainer,
} from './styled';
import Card from 'components/Card';
import Countdown from 'components/Countdown';
import { FaChalkboardTeacher, FaRegPlayCircle } from 'react-icons/fa';
import Button from 'components/Button';
import { RouteComponentProps } from 'react-router-dom';

type Props = {} & RouteComponentProps;
type State = {
  buttonEnabled: boolean;
};

class WelcomeRoute extends React.Component<Props, State> {
  state = {
    buttonEnabled: false,
  };

  handleComplete = () => {
    this.setState({
      buttonEnabled: true,
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
    const { buttonEnabled } = this.state;

    return (
      <Container>
        <Card flex={1} background="linear-gradient(#ccc, #777)">
          <span>LOGO</span>
          <span>Links...</span>
          <span>Links...</span>
          <span>Links...</span>
          <span>Links...</span>
        </Card>
        <Card flex={5} background="linear-gradient(#fff, #ccc)">
          <Content>
            <h2>
              Olá <i>Fabiano Maeda</i>, bem vindo!
            </h2>
            <CountdownContainer>
              <Countdown onComplete={this.handleComplete} />
            </CountdownContainer>
            <p>
              Enquanto isso, você pode se familiarizar com o sistema através do
              Tutorial.
            </p>
            <ButtonContainer>
              <Button onClick={this.handleTutorialClick}>
                <FaChalkboardTeacher /> Tutorial
              </Button>
              <Button onClick={this.handleStartClick} disabled={!buttonEnabled}>
                <FaRegPlayCircle /> Iniciar Prova
              </Button>
            </ButtonContainer>
          </Content>
        </Card>
      </Container>
    );
  }
}

export default WelcomeRoute;
