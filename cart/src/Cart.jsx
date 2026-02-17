import React from "react";
import { useSelector } from "react-redux";

function Cart() {
    const items = useSelector(state => state.cart.items);

    return (
        <div>
            <h3>Cart ({items.length})</h3>

            {items.map((item, index) => (
                <p key={index}>{item.productName}</p>
            ))}
        </div>
    );
}
export default Cart
