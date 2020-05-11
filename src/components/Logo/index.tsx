import React from 'react';
import styled from 'styles';

import { IoLogoApple } from 'react-icons/io';

const Container = styled.div`
  color: #ea3856;
  font-size: 40px;
  filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.5));
  margin: 0 20px 0 12px;
  /* border: solid red; */
`;

export default () => (
  <Container>
    <IoLogoApple />
  </Container>
);
