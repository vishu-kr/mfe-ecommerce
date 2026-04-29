import React from "react";
import styles from './Auth.module.css'

function Auth() {

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
                            style={{
                                flex: 1,
                                border: 'none',
                                outline: 'none'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;