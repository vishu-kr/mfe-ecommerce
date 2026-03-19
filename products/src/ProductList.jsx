import React, { useEffect, useState } from "react"
import Card from "./components/Card.jsx"
function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (await fetch("https://dummyjson.com/products")).json()
                setProducts(response.products)
                console.log(Array.isArray(products))
            }
            catch (e) {
                console.log(e.value)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {products.map(item =>
                    <Card key={item.id} product={item} />
                )}
            </div>
        </>
    )
}
export default ProductList