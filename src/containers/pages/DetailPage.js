import React from 'react';

import WideSection from '../../components/core/Layout/WideSection';
import Breadcrumb from '../../components/core/Layout/Breadcrumb';
import ProductDetails from '../../components/products/Details';

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
    };
  }

  render() {
    const { category, title } = this.props.match.params;
    return (
      <div style={{ paddingTop: 80 }}>
        <WideSection>
          <div>
            <Breadcrumb category={category} title={title} />
            <ProductDetails />
          </div>
        </WideSection>
      </div>
    );
  }
}
