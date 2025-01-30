import React from "react";
import Icon from '/assets/welcome/Shaun Logo.png';

import styles from "./ExchangeRateTool.module.css";

export const ExchangeRateTool = () => {
    return (
    <section className={styles.container}>
        <div className = {styles.contentLeft}>
            <h1 className={styles.title}>Exchange Rates:</h1>
            <h1 className={styles.title}>Past, Present, Anytime!</h1>
            <p className={styles.descripion}>Effortlessly check rates for any date - whether it's today, yesterday, or a moment in history. Stay informed anytime!</p>
        </div>
        <div className={styles.contentRight}>
            <h3>Check Now</h3>
            <div class="exchange-container">
                <label>Currency From</label>
                <select>
                    <option>🇺🇸 USD</option>
                    <option>🇪🇺 EUR</option>
                </select>
                <label>Currency To</label>
                <select>
                    <option>🇨🇦 CAD</option>
                    <option>🇬🇧 GBP</option>
                </select>
                <label>Date of Enquiry</label>
                <input type="date" />
                <button>Submit</button>
            </div>
        </div>
    </section>
    );
};