import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "shared/cartSlice";
import CartCard from './components/CartCard.jsx'

function Cart() {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items);
    const totalCost = items.reduce((acc, currentVal) => acc + currentVal.productPrice, 0)

    const placeOrder = () => {
        alert("Order successful")
        dispatch(clearCart())
    }

    return (
        items.length === 0 ? (<p>Your cart is empty.</p>) : (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <h3>Products in Cart:  ({items.length})</h3>
                    <div>
                        {items.map((item, index) => (
                            <CartCard key={index} item={item} />
                        ))}
                    </div>
                    <h2>Total Price: ₹{totalCost}</h2>
                    <button onClick={placeOrder} aria-label={`Place order for ${items.length} items totaling ₹${totalCost}`}>Place Order</button>
                </div>
            </div>
        )
    );
}
export default Cart
