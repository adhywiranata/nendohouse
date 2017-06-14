import React from 'react';
import { lazify } from 'react-code-split-component';

import WideSection from '../components/core/Layout/WideSection';

export default lazify(() => (
  <div style={{ paddingTop: 60 }}>
    <WideSection>
      <h1>404</h1>
    </WideSection>
  </div>
));
