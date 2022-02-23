import React from 'react'
import Container from './style'
import img1 from '../assets/1.jpg'

function Product() {
  return (
    <div className="Product">
      <div className="main__card">
          <img src={img1}/>
          <div className="main__card--content">
            <h4>Sneakers</h4>
            <div className="main__card--price">
              <p className="main__card--item-price">$69.99</p>
              <button className="btn">Add to cart</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product