import React, {createContext, useState} from 'react';

const Store = createContext()


function StoreContext(props) {
    const [items, setItems] = useState([
        {
            id: 1,
            title: 'Reebok',
            price: '49',
            quantity: 1,
        },
        {
            id: 2,
            title: 'Nike',
            price: '129',
            quantity: 1,
        },
        {
            id: 3,
            title: 'Air Jordan',
            price: '159',
            quantity: 1,
        },
        {
            id: 4,
            title: 'Reebok Sneakers',
            price: '89',
            quantity: 1,
        },
        {
            id: 5,
            title: 'Reserved Footwear',
            price: '79',
            quantity: 1,
        },
        {
            id: 6,
            title: 'Columbia',
            price: '119',
            quantity: 1,
        },
        {
            id: 7,
            title: 'Nike Sneakers',
            price: '249',
            quantity: 1,
        },
        {
            id: 8,
            title: 'Nautica',
            price: '39',
            quantity: 1,
        },
    ])

    const [cartItems, setCartItems] = useState([])

    const addToCart = (newItem) => {
        setCartItems([...cartItems, newItem])
    }
    //console.log(items, 'props from context')

    return (
        <Store.Provider value={{products: items, addToCart, cart: cartItems}}>
            {
                props.children
            }
        </Store.Provider>
    )
}

export { Store }
export default StoreContext