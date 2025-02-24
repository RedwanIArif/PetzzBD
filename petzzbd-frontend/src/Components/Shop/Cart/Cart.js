import { Box } from '@mui/material';
import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 10;
    let total = 20;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <Box>
            <h3>Order Summary</h3>
            <h5>Items Ordered : {totalQuantity}</h5>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </Box>
    );
};

export default Cart;