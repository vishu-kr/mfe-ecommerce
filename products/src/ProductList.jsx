import React, { useEffect, useState } from "react"
import Card from "./components/Card.jsx"
import LoaderCard from "./components/Loader.jsx";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (await fetch("https://dummyjson.com/products")).json()
                setProducts(response.products)
                console.log(Array.isArray(products))
            }
            catch (e) {
                console.log(e.value)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    if (isLoading) {
        return (
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {new Array(25).fill(0).map((_, idx) => <LoaderCard key={idx} />)}
            </div>)
    }

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