import React, { useState } from 'react';
import './App.css';
import {getExchangeRate} from "./exchangeRateScript.js";

function App() {
    const [date, setDate] = useState('');
    const [buttonText, setButtonText] = useState('Submit');

    const handleSubmit = async () => {
        // Call your exchange rate script here
        console.log('Running exchange rate script for date:', date);
        let fsx = await getExchangeRate(date, "USD");
        console.log(fsx);
        setButtonText(fsx);
        setTimeout(() => setButtonText('Submit'), 2000); // Reset after 2 seconds
        //setTimeout(() => setButtonText('Submit'), 2000);
    };

    return (
        <div className="App">
            <nav className="navbar">
                <h1 className="nav-title">Bank of Canada Metrics</h1>
                <ul className="nav-links">
                    <li><a href="https://www.canva.com/design/DAGeurLWYNQ/olduAH0rJ1WOnNVTJRFRiQ/edit?utm_content=DAGeurLWYNQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Design</a></li>
                    <li><a href="https://www.figma.com/design/M2kjbsdW5ERzuUxAuEyqfR/FER-Calculator-Site?node-id=94-179&t=AldkFHQuGQleMFJd-1">Development</a></li>
                    <li><a href="https://www.bankofcanada.ca/valet/">Resources</a></li>
                </ul>
            </nav>

            <section className="hero">
                <div className="hero-text-container">
                    <h1 className="hero-title">
                        Exchange Rates:<br />
                        Past, Present, Anytime!
                    </h1>
                    <p className="hero-text">
                        Effortlessly check exchange rates for any date—whether it's today, yesterday, or a moment in history. Stay informed, anytime!
                    </p>
                </div>
                <div className="info-box">
                    <h2 className="section-header">Check Now</h2>
                    <div className="boxes-container">
                        <div className="box left-box">
                            {/* Content for left box */}
                        </div>
                        <div className="box right-box">
                            <h2 style={{ fontWeight: 'bold' }}>CAD</h2>
                        </div>
                    </div>
                    <input
                        type="date"
                        className="date-input"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <button className="submit-button" onClick={handleSubmit}>{buttonText}</button>
                </div>
            </section>

            <footer className="footer">
                <a href="https://www.canva.com/design/DAGeurLWYNQ/olduAH0rJ1WOnNVTJRFRiQ/edit?utm_content=DAGeurLWYNQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Design</a>
                <a href="https://www.figma.com/design/M2kjbsdW5ERzuUxAuEyqfR/FER-Calculator-Site?node-id=94-179&t=AldkFHQuGQleMFJd-1">Development</a>
                <a href="https://www.bankofcanada.ca/valet/">Resources</a>
                <a href="mailto:shaun.akash@gmail.com">Contact</a>
            </footer>
        </div>
    );
}

export default App;
