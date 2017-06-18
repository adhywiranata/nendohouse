import React from 'react';

import WideSection from '../components/core/Layout/WideSection';
import ProductDetails from '../components/products/Details';

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
    };
  }

  render() {
    return (
      <div style={{ paddingTop: 80 }}>
        <WideSection>
          <div>
            <div>
              BREADCRUMBSSSSS
            </div>
            <ProductDetails />
          </div>
        </WideSection>
      </div>
    );
  }
}
