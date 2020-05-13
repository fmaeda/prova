import React from 'react';

import { FaCircle } from 'react-icons/fa';
import { connect } from 'react-redux';

import { Container, Content, ProgressContainer, ProgressBar } from './styled';
import { RootState } from 'store';

const mapStateToProps = ({ exame: { respondidas, restantes } }: RootState) => ({
  progress: (respondidas / (restantes + respondidas)) * 100,
});

type Props = {} & ReturnType<typeof mapStateToProps>;

class CompletionMeter extends React.Component<Props> {
  render() {
    const { progress } = this.props;

    return (
      <Container>
        Progresso
        <Content>
          <FaCircle fill="#ea3856" />
          <ProgressContainer>
            <ProgressBar progress={progress} />
          </ProgressContainer>
          <FaCircle fill={progress < 100 ? 'silver' : '#ea3856'} />
        </Content>
        {`${progress.toFixed()}%`}
      </Container>
    );
  }
}

export default connect(mapStateToProps)(CompletionMeter);
