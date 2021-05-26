import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from 'components/Common/GlobalStyle';
import Introduction from 'components/Main/Introduction';
import ProfileImage from 'components/Main/ProfileImage';
import Footer from 'components/Common/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction  />
      <Footer />
    </Container>
  //   <div>
  //   <Link to="/info/">To Info</Link>
  // </div>
  );
};

export default IndexPage;