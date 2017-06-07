import React from 'react';
import loadingSvg from '../../../images/loading.svg';

export default class LazyImage extends React.Component {
  componentDidMount() {
    const srcAttr = this.img.getAttribute('data-src');
    this.img.setAttribute('src', srcAttr);
    this.img.onload = () => {
      console.log('loading..');
      this.loadingImg.setAttribute('style', 'display: none');
      this.img.setAttribute('style', 'display: block');
    };
  }

  render() {
    return (
      <picture>
        <img
          src={loadingSvg}
          alt="loading"
          width="100%"
          ref={(img) => { this.loadingImg = img; }}
        />
        <img
          data-src="http://images.goodsmile.info/cgm/images/product/20170526/6467/45602/large/f09416643e5fb327c6de0e98cadbf025.jpg"
          alt="izumi"
          width="100%"
          ref={(img) => { this.img = img; }}
          style={{ display: 'none' }}
        />
      </picture>
    );
  }
}
