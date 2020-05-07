import React from 'react';
import styled from 'styles';

import { IoLogoApple } from 'react-icons/io';

const Container = styled.div`
  color: #ea3856;
  font-size: 50px;
  filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.5));
`;

export default () => (
  <Container>
    <IoLogoApple />
  </Container>
);
