import React from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';
import { Container, Content } from './styled';

type Props = {
  onClick: () => void;
  content: string;
  active?: boolean;
};

class AlternativaComponent extends React.Component<Props> {
  render() {
    const { content, onClick, active } = this.props;

    return (
      <Container onClick={onClick} active={active}>
        {active ? <FaRegCheckCircle /> : <FaRegCircle />}
        <Content
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Container>
    );
  }
}

export default AlternativaComponent;
