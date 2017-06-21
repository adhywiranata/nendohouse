import React from 'react';
import loadingSvg from '../../../images/loading.svg';

export default class LazyImage extends React.Component {
  componentDidMount() {
    const srcAttr = this.img.getAttribute('data-src');
    this.img.setAttribute('src', srcAttr);
    this.img.onload = () => {
      this.loadingImg.style.display = 'none';
      this.img.style.display = 'block';
    };
  }

  render() {
    return (
      <picture style={{ height: 300, width: '100%', overflow: 'hidden' }}>
        <div
          style={{ padding: 50, height: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          ref={(imgContainer) => { this.loadingImg = imgContainer; }}
        >
          <img
            src={loadingSvg}
            alt="loading"
            width="50%"
          />
        </div>
        <img
          data-src={this.props.src}
          alt="izumi"
          ref={(img) => { this.img = img; }}
          style={{ display: 'none', objectFit: 'cover', width: '100%', height: 300 }}
        />
      </picture>
    );
  }
}
