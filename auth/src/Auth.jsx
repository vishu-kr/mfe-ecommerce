import React from "react";
import styles from './Auth.module.css'

function Auth() {

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}></div>
        </div>
    );
}

export default Auth;