import React from 'react';

import { Container } from './styled';
import { RouteComponentProps } from 'react-router';

import StyledButton from 'components/StyledButton';

declare let MathJax: any;

const formula = String.raw`
  \[
    \left[
      \begin{matrix}
        1,012 & 0,066 & 0,216 \\
        0,002&0,070&0,036  \\
        0,168&0,104&1,262
      \end{matrix}
      \right]
      \begin{matrix}
          \text{ proteínas } \\
          \text{ gorduras } \\
        \text{ carboidratos }
      \end{matrix}
    \]
  `;

type Props = {} & RouteComponentProps;

export default class extends React.Component<Props> {
  ref = React.createRef<HTMLDivElement>();

  componentDidUpdate() {
    if (MathJax) {
      MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.ref.current]);
    }
  }

  render() {
    const { history } = this.props;

    return (
      <Container>
        <StyledButton
          onClick={() => history.push('/products')}
          label="Products"
        />
        <div
          ref={this.ref}
          dangerouslySetInnerHTML={{
            __html: formula,
          }}
        />
        {/* <p>{formula}</p> */}
      </Container>
    );
  }
}
