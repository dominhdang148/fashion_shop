import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {delCart} from '../redux/action/index';
import { NavLink } from 'react-router-dom';

const Cart =()=> {
    return(
        <div>
            <h1>Cart</h1>
        </div>
    )
}

export default Cart;