import React from 'react';

import { Container } from './styled';

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

class Button extends React.Component<Props> {
  render() {
    const { onClick, children, disabled } = this.props;

    return (
      <Container
        onClick={onClick}
        disabled={disabled}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 10,
        }}
      >
        {children}
      </Container>
    );
  }
}

export default Button;
