import React from 'react';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', width: '70%', padding: 0 }}>
    <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid rgba(0,0,0,0.1)', padding: 10 }}>
      <img
        alt="wow"
        src="http://images.goodsmile.info/cgm/images/product/20170526/6467/45602/large/f09416643e5fb327c6de0e98cadbf025.jpg"
        width="230px"
        height="300px"
      />
      <div style={{ padding: 10, display: 'flex', flexDirection: 'column' }}>
        <h2>Nendoroid Izumi Sagiri</h2>
        <span>wow wow yeah yeah</span>
        <span>Rp. 50.000</span>
        <span>Stok: 50</span>
        <div>
          <button>+</button>
          <input type="text" />
          <button>-</button>
        </div>
        <div>
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
    <div>
      tabbed contents
    </div>
  </div>
);
