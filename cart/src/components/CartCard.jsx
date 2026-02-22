import React from 'react'
function CartCard({ item }) {
    return (
        <>
            <div style={{
                display: 'flex',
                border: '1px solid',
                borderRadius: '4px',
                margin: '5px 0 5px 0'
            }}>
                <img src={item.img} style={{ width: '50px', }} />
                <h3 style={{ marginLeft: '30px' }}>{item.productName}</h3>
            </div>
        </>
    )
}
export default CartCard