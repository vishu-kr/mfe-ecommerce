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
                <img src={item.thumbnail} style={{ width: '50px', }} />
                <div>
                    <h3 style={{ marginLeft: '30px' }}>{item.title}</h3>
                    <p style={{ marginLeft: '30px' }}>₹{item.price}</p>
                </div>

            </div>
        </>
    )
}
export default CartCard