import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-buttom/custom-button';
import { selectCartItem } from '../redux/cart/cart.selectors';
import './cart-dropdown.style.scss';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>        
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItem(state)
})

export default connect(mapStateToProps)(CartDropdown);