import React, { useState } from "react";
import styles from './Auth.module.css'

function Auth() {
    const [mobile, setMobile] = useState("")
    const [step, setStep] = useState("mobile")
    const [otp, setOtp] = useState("1234")
    const isEnable = mobile.length == 10

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {
                    step == "mobile" ?
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
                                isEnable ? <button className={styles.button} onClick={() => { setStep("otp") }}>Continue</button> :
                                    <button style={{
                                        backgroundColor: 'rgb(99 165 240)',
                                        borderRadius: '4px',
                                        color: 'white',
                                        width: '137px',
                                        padding: '5px',
                                        border: 'none'
                                    }}
                                        disabled
                                        onClick={() => { console.log("Login") }}
                                    >Continue</button>
                            }
                        </div>
                        :
                        <div>
                            <div style={{ textAlign: 'center' }}>Enter OTP sent to +91{mobile}</div>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}>
                                {
                                    otp.split('').map((ele, idx) => (
                                        <div style={{
                                            width: '32px', height: '32px', display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center', gap: '8px', border: '1px solid black'
                                        }} key={idx}>{ele}</div>
                                    ))
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}

export default Auth;