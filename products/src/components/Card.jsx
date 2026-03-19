import React from "react"
import styles from './Card.module.css'
import { useDispatch } from "react-redux"
import { addToCart } from "shared/cartSlice";

function Card({ product }) {
    const dispatch = useDispatch()
    return (
        <>
            <div className={styles.card}>
                <img
                    src={product.images[0]}
                    className={styles.image}
                />

                <h4 className={styles.title}>
                    {product.title}
                </h4>

                <div className={styles.footer}>
                    <p className={styles.price}>
                        ₹ {product.price}
                    </p>
                    <button className={styles.button} onClick={() => dispatch(addToCart(product))}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    )
}
export default Card
