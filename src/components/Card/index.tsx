import React from 'react';

import { Container } from './styled';

type Props = {
  flex?: 'none' | number;
  background?: string;
};

class Card extends React.Component<Props> {
  render() {
    const { children, flex, background } = this.props;

    return (
      <Container flex={flex} background={background}>
        {children}
      </Container>
    );
  }
}

export default Card;
