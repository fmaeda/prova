import React from 'react';

import { Container, Background, Bar } from './styled';

type Props = {
  fillColor: string;
  progress: number;
};

class ProgressBar extends React.Component<Props> {
  render() {
    const { fillColor, progress } = this.props;

    return (
      <Container>
        <Background color="gray" />
        <Bar color={fillColor} progress={progress} />
      </Container>
    );
  }
}

export default ProgressBar;
