import React from 'react';
import glamorous from 'glamorous';

import CoverImg from '../../images/cover.jpg';

const grayScaleConst = 'grayscale(70%)';

const grayScales = {
  WebkitFilter: grayScaleConst,
  MozFilter: grayScaleConst,
  OFilter: grayScaleConst,
  MsFilter: grayScaleConst,
  filter: grayScaleConst,
};

const CoverOverlay = glamorous.div({
  position: 'absolute',
  zIndex: 1,
  backgroundColor: 'rgba(0,0,0,0.3)',
  width: '100%',
  height: '100%',
});

const CoverResponsiveWrapper = glamorous.div({
  background: `url(${CoverImg})`,
  backgroundSize: 'cover',
  height: 300,
  width: '100%',
  ...grayScales,
});

const ParallaxWrapperStyle = {
  transition: '0.1s',
  background: `url(${CoverImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '0% -50px',
  backgroundAttachment: 'fixed',
  backgroundSize: 'contain',
  position: 'absolute',
  ...grayScales,
  left: -55,
  right: -55,
  top: -15,
  bottom: -15,
};

const CoverHeading = () => (
  <div style={{ width: '100%', position: 'absolute', zIndex: 2, bottom: -10, color: '#FFFFFF', fontSize: '1.3em', textAlign: 'center' }}>
    <h1>NENDOHOUSE COLLECTIONS</h1>
    <p style={{ marginTop: -20 }}>Your #1 Nendoroid Marketplace</p>
  </div>
);

class ParallaxCover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    let currentYScroll = 0;
    const parallaxCover = document.getElementById('parallax-cover');

    // set windowwidth state on window resize
    window.addEventListener('resize', () => {
      this.setState({
        windowWidth: window.innerWidth,
      });
    });

    // do parallax cover animation on window scroll if ParallaxCover exists
    if (parallaxCover !== null) {
      window.addEventListener('scroll', () => {
        if (window.pageYOffset === 0) {
          parallaxCover.style.backgroundPosition = '0% -50px';
          parallaxCover.style.WebkitFilter = 'grayscale(70%) blur(0px)';
          return true;
        }
        const currVal = Number(parallaxCover.style.backgroundPosition.split(' ')[1].replace('px', ''));
        let increment = 3;
        if (window.pageYOffset > currentYScroll) {
          increment = -3;
        }
        currentYScroll = window.pageYOffset;
        parallaxCover.style.backgroundPosition = `0% ${currVal + increment}px`;
        parallaxCover.style.WebkitFilter = 'grayscale(70%) blur(3px)';
        return true;
      });
    }
  }

  render() {
    return (
      <div style={{ position: 'relative', height: 300, overflow: 'hidden' }}>
        { this.state.windowWidth >= 1200 ? (
          <div>
            <div id="parallax-cover" style={ParallaxWrapperStyle} />
            <CoverOverlay />
            <CoverHeading />
          </div>
        ) : (
          <CoverResponsiveWrapper>
            <CoverOverlay />
            <CoverHeading />
          </CoverResponsiveWrapper>
        )}
      </div>
    );
  }
}

export default ParallaxCover;
