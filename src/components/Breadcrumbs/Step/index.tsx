import React from 'react';

import {
  Container,
  IconContainer,
  ProgressContainer,
  ProgressBackground,
  ProgressFill,
} from './styled';

type Props = {
  icon: React.ComponentType;
  label: string;
  total: number;
  concluidos: number;
  active?: boolean;
  disabled?: boolean;
  hideProgress?: boolean;
};

class Step extends React.Component<Props> {
  render() {
    const {
      icon: Icon,
      label,
      disabled,
      total,
      concluidos,
      active,
      hideProgress,
    } = this.props;

    const percentComplete = total === 0 ? 0 : (concluidos / total) * 100;

    return (
      <Container>
        <IconContainer active={active} readonly={disabled}>
          <Icon data-tip={label} />
        </IconContainer>
        {!hideProgress && (
          <ProgressContainer>
            <ProgressBackground />
            <ProgressFill progress={percentComplete} />
          </ProgressContainer>
        )}
      </Container>
    );
  }
}

export default Step;
