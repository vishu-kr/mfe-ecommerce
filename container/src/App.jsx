import React, { Suspense } from "react";

const ProductList = React.lazy(() => import("products/ProductList"));
const Cart = React.lazy(() => import("cart/Cart"));
import './style.css'
function App() {
    return (
        <div>
            <header className="navbar">
                <h2>Microshop</h2>
                <nav className="navv">
                    <span>Cart</span>
                </nav>
            </header>

            <Suspense fallback={<p>Loading Products...</p>}>
                <ProductList />
            </Suspense>

            <Suspense fallback={<p>Loading Cart...</p>}>
                <Cart />
            </Suspense>
        </div>
    );
}

export default App;
