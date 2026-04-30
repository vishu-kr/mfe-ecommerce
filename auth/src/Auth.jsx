import React, { useState } from "react";
import styles from './Auth.module.css'

function Auth() {
    const [mobile, setMobile] = useState("")
    const isEnable = mobile.length == 10

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2 className={styles.title}>PhatSe ⚡️</h2>
                    <p className={styles.subtitle}>Login / SignUp</p>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid gray',
                        borderRadius: '6px',
                        padding: '6px'
                    }}>
                        <span style={{ marginRight: '8px' }}>+91</span>

                        <input
                            type="tel"
                            placeholder="Enter mobile number"
                            maxLength={10}
                            value={mobile}
                            style={{
                                flex: 1,
                                border: 'none',
                                outline: 'none'
                            }}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "")
                                setMobile(value)
                            }}
                        />

                    </div>
                    <h2>{mobile}</h2>
                    {
                        isEnable ? <button className={styles.button} onClick={() => { console.log("Login") }}>Continue</button> :
                            <button style={{
                                backgroundColor: 'rgb(99 165 240)',
                                borderRadius: '4px',
                                color: 'white',
                                width: '137px',
                                padding: '5px',
                                border: 'none'
                            }} >Continue</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Auth;