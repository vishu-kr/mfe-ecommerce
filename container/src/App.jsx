import React from "react";
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const ProductList = React.lazy(() => import("products/ProductList"));
const Cart = React.lazy(() => import("cart/Cart"));
import './style.css'
function App() {
    const items = useSelector(state => state.cart.items)
    // const [cartMFE, setCartMFE] = useState(true)
    return (
        // this feature is using state
        // <div>
        //     <header className="navbar">
        //         <h2>Microshop</h2>
        //         <nav className="navv">
        //             <a onClick={() => setCartMFE(false)}>Cart({items.length})</a>
        //         </nav>
        //     </header>
        //     {
        //         cartMFE ? <Suspense fallback={<p>Loading Products...</p>}>
        //             <ProductList />
        //         </Suspense> :
        //             <Suspense fallback={<p>Loading Cart...</p>}>
        //                 <Cart />
        //             </Suspense>
        //     }
        // </div>

        //below one is using router
        <BrowserRouter>
            <header className="navbar">
                <h2>Microshop</h2>
                <nav className="navv" aria-label="Main navigation">
                    <Link to="/" className="nav-link">
                        Product
                    </Link>
                    <Link to="/cart" className="nav-link" aria-label={`Open cart with ${items.length} items`}>
                        Cart({items.length})
                    </Link>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
