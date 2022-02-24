import React, { useContext } from "react";
import Container from "./style";
import { Store } from "../Context/Context.Store";
import images from "../assets/images";
import { MdDelete } from "react-icons/md";

function Cart() {
  const { cart, addQtyHandler, deleteHandler } = useContext(Store);
  //console.log( cart )

  return (
    <Container>
      <div className="cart__container">
        {cart.map((item) => (
          <div className="cart__card">
            <img src={images[item.data.id]} />
            <div className="cart__info">
              <div className="cart__title">
                <h4>{item.data.title}</h4>
                <div className="cart__action">
                  <button
                    type="button"
                    className="cart__btn"
                    onClick={() => addQtyHandler(item.data.id, "+")}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    className="cart__input"
                    value={item.saleQty}
                  ></input>
                  <button
                    type="button"
                    className="cart__btn"
                    onClick={() => addQtyHandler(item.data.id, "-")}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="cart__btn delete_btn"
                    onClick={() => deleteHandler(item.data.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
              <p>$ {item.data.price * item.saleQty}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Cart;
