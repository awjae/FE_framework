import React, { FunctionComponent } from 'react';
import Text from 'components/Text';

const IndexPage: FunctionComponent = function () {
  return <Text text={'10'} />; // error TS2322: Type 'number' is not assignable to type 'string'.
};

export default IndexPage;