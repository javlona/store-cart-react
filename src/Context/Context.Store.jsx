import React, { createContext, useState, useEffect } from "react";

const Store = createContext();

function StoreContext(props) {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Reebok",
      price: "49",
      quantity: 1,
    },
    {
      id: 2,
      title: "Nike",
      price: "129",
      quantity: 1,
    },
    {
      id: 3,
      title: "Air Jordan",
      price: "159",
      quantity: 1,
    },
    {
      id: 4,
      title: "Reebok Sneakers",
      price: "89",
      quantity: 1,
    },
    {
      id: 5,
      title: "Reserved Footwear",
      price: "79",
      quantity: 1,
    },
    {
      id: 6,
      title: "Columbia",
      price: "119",
      quantity: 1,
    },
    {
      id: 7,
      title: "Nike Sneakers",
      price: "249",
      quantity: 1,
    },
    {
      id: 8,
      title: "Nautica",
      price: "39",
      quantity: 1,
    },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    getTotalPrice()
  }, [cartItems])

  const addToCart = (addedItem) => {
    const isItemExist =
      cartItems.length && cartItems.find((i) => i.data.id === addedItem.id);

    if (!isItemExist) {
      setCartItems([...cartItems, { data: addedItem, saleQty: 1 }]);
    } else {
      const updated = cartItems.map((item) =>
        item.data.id === addedItem.id
          ? { ...item, saleQty: item.saleQty + 1 }
          : item
      );
      setCartItems(updated);
    }
  };

  const addQtyHandler = (id, sign) => {
    const updated = cartItems.map((item) =>
      item.data.id === id
        ? {
            ...item,
            saleQty : sign === "+" ? 
                item.saleQty + 1 : item.saleQty === 1 ? item.saleQty :
                item.saleQty - 1 
          }
        : item
    );

    setCartItems(updated);
  };

  const deleteHandler = (id) => {
    const updated = cartItems.filter((item) => item.data.id !== id)
    setCartItems( updated )
  }

  const changeHandler = (e) => {
    const { value } = e.target
    console.log(e)
  }


  const getTotalPrice = () => {
    const total = cartItems.reduce((prev, current) => {
      let sum = current.data.price * current.saleQty
      return sum + prev
    }, 0)
    
    // const sum = cartItems.map(item => (
    //   item.data.price * item.saleQty
    // ))
    //setTotal(sum.reduce((i, j) => i+j, 0 ))
    setTotal(total)
  }
 
  console.log(cartItems);

  return (
    <Store.Provider
      value={{  products: items, 
                addToCart, 
                cart: cartItems, 
                addQtyHandler,
                deleteHandler,
                changeHandler,
                getTotalPrice,
                total
               }}
    >
      {props.children}
    </Store.Provider>
  );
}

export { Store };
export default StoreContext;
