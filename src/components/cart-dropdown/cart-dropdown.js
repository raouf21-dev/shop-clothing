import React from 'react';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-buttom/custom-button';
import { toggleCartHidden } from '../redux/cart/cart.actions';
import { selectCartItem } from '../redux/cart/cart.selectors';
import './cart-dropdown.style.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? 
                    cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem}/>) :     
                    <span className="no-items">There is no items</span> 
            }
        </div>
            <CustomButton onClick={() => {

                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}
            >
                GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItem(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));