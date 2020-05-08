import React from 'react';

import { Container } from './styled';

type Props = {
  icon: React.ComponentType;
  onClick: () => void;
  disabled?: boolean;
};

class IconButton extends React.Component<Props> {
  render() {
    const { icon: Icon, onClick, disabled } = this.props;

    return (
      <Container onClick={() => !disabled && onClick()} disabled={disabled}>
        <Icon />
      </Container>
    );
  }
}

export default IconButton;
