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
      <Container onClick={onClick} disabled={disabled}>
        {children}
      </Container>
    );
  }
}

export default Button;
