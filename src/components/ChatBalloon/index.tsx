import React from 'react';

import { Container, Balloon } from './styled';

type Props = {
  hidden: boolean;
};

class ChatBalloon extends React.Component<Props> {
  render() {
    const { children, hidden } = this.props;

    return (
      <Container hidden={hidden}>
        <Balloon>{children}</Balloon>
      </Container>
    );
  }
}

export default ChatBalloon;
