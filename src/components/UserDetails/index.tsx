import React from 'react';

import { Container, Label } from './styled';

type Props = {
  cpf: string;
  nome: string;
};

class UserDetails extends React.Component<Props> {
  render() {
    const { cpf, nome } = this.props;

    return (
      <Container>
        <Label></Label>
        <Label></Label>
      </Container>
    );
  }
}

export default UserDetails;
