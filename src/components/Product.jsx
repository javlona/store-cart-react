import React, { useContext } from 'react'
import Container from './style'
import img1 from '../assets/1.jpg'
import images from '../assets/images'
import { Store } from '../Context/Context.Store'



function Product() {
  const {products, addToCart, cart} = useContext( Store )
  // console.log('from products', images)
  


  return (
    <div className="Product">
      {
        products.map(product => (
          <div className="main__card" key={product.id}>
            <img src={images[product.id]}/>
            <div className="main__card--content">
              <h4>{product.title}</h4>
              <div className="main__card--price">
                <p className="main__card--item-price">$ {product.price}</p>
                <button className="btn" onClick={() => addToCart( product ) }>Add to cart</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Product