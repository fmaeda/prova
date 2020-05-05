import React from 'react';

import { ItemContainer, FlipPanel } from './styled';

type Props = {
  label: string;
  value: number;
};

export default class extends React.Component<Props> {
  render() {
    const { label, value } = this.props;
    return (
      <ItemContainer>
        <FlipPanel key={value}>{value < 10 ? `0${value}` : value}</FlipPanel>
        <span>{label}</span>
      </ItemContainer>
    );
  }
}
