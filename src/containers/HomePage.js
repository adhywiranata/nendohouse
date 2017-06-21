import React from 'react';
import { connect } from 'react-redux';

import { selectAllProducts } from '../reducers/productReducer';

import ProductList from '../components/products/List';
import WideSection from '../components/core/Layout/WideSection';
import CoverImg from '../images/cover.jpg';

class HomePage extends React.Component {
  componentDidMount() {
    let currentYScroll = 0;
    const parallaxCover = document.getElementById('parallaxCover');
    window.addEventListener('scroll', () => {
      if(window.pageYOffset === 0) {
        parallaxCover.style.backgroundPosition = '0% -50px';
        parallaxCover.style.WebkitFilter = `grayscale(70%) blur(0px)`;
        return true;
      }
      let currVal = Number(parallaxCover.style.backgroundPosition.split(' ')[1].replace('px', ''));
      let increment = 3;
      if (window.pageYOffset > currentYScroll) {
        increment = -3;
      }
      currentYScroll = window.pageYOffset;
      parallaxCover.style.backgroundPosition = `0% ${currVal + increment}px`;
      parallaxCover.style.WebkitFilter = `grayscale(70%) blur(3px)`;
      return true;
    });
  }

  render() {
    return (
      <div style={{ paddingTop: 60 }}>
        <div style={{ position: 'relative', height: 300, overflow: 'hidden' }}>
          <div
            id="parallaxCover"
            style={{
              transition: '0.1s',
              background: `url(${CoverImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0% -50px',
              backgroundAttachment: 'fixed',
              backgroundSize: 'contain',
              WebkitFilter: 'grayscale(70%)',
              MozFilter: 'grayscale(70%)',
              OFilter: 'grayscale(70%)',
              MsFilter: 'grayscale(70%)',
              filter: 'grayscale(70%)',
              position: 'absolute',
              left: -55,
              right: -55,
              top: -15,
              bottom: -15,
            }}
          />
          <div style={{ position: 'absolute', zIndex: 1, backgroundColor: 'rgba(0,0,0,0.3)', width: '100%', height: '100%' }} />
          <div style={{ position: 'absolute', zIndex: 2, bottom: -10, left: 100, color: '#FFFFFF', fontSize: '1.3em' }}>
            <h1>NENDOHOUSE COLLECTIONS</h1>
            <p style={{ marginTop: -20 }}>Your #1 Nendoroid Marketplace</p>
          </div>
        </div>
        <WideSection>
          <ProductList products={this.props.products} isProductsFetching={this.props.isProductsFetching} />
        </WideSection>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: selectAllProducts(state.products),
  isProductsFetching: state.products.isFetching,
});

export default connect(mapStateToProps, null)(HomePage);
