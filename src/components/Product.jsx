import React, { useContext } from 'react'
import Container from './style'
import img1 from '../assets/1.jpg'
import { Store } from '../Context/Context.Store'



function Product(props) {
  const {products, addToCart, cart} = useContext( Store )
  console.log('from products', cart)
  


  return (
    <div className="Product">
      {
        products.map(product => (
          <div className="main__card" key={product.id}>
            <img src={img1}/>
            <div className="main__card--content">
              <h4>{product.title}</h4>
              <div className="main__card--price">
                <p className="main__card--item-price">$ {product.price}</p>
                <button className="btn" onClick={ addToCart }>Add to cart</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Product