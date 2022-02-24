import sty from 'styled-components'

const Container = sty.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px 40px;
    button {
        border: none;
        background: rgb(32,28,38);
        color: rgb(242,242,243);
        padding: 4px 6px;
        border-radius: 4px;
        cursor: pointer;
    }
    .header__logo{
        text-transform: uppercase;
        font-weight: 200;
    }
    .header__links{
        display: flex;
        align-items: center;
        gap: 15px;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
    }
    .header__links *+* {
        border-left: 1px solid #000;
        padding: 0 10px; 
    }
    .header__links li:hover {
        text-decoration: underline;
    }
    .Product {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }
    .main__card {
        width: 160px;
        margin: 10px 0;
    }
    .main__card--price {
        margin-top: 10px;
        display:flex;
        justify-content: space-between;
    }
    .main__card--item-price {
        font-size: 15px;
        font-weight: 500;
    }
    .cart__container {
        padding: 20px;
        .cart__card {
            display: flex;
            margin-bottom: 10px; 
        }
        .cart__info {
            margin-left: 10px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            p {
                font-weight: 500;
            }
        }
        .cart__title {
            display: flex;
            flex-direction: column;
        }
        .cart__action{
            display: flex;
            margin-top: 10px;
            .delete_btn {
                margin-left: 4px;
                background: #D3475D;
            }
        }
        .cart__action > * {
            width: 30px;
        }
        img {
            width: 50px;
        }
    }

`

export default Container;