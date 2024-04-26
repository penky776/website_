import React, { useState, useEffect } from 'react';
import '../styles/fonts.css'
import "../styles/style.css"

function poe() {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch('quotes.txt')
            .then(response => response.text())
            .then(text => {
                const lines = text.split('\n');
                console.log(`text: ${text}`);
                const randomIndex = Math.floor(Math.random() * lines.length);
                setQuote(lines[randomIndex]);
            });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center p-8">
            <div className="flex flex-col justify-between p-4 leading-normal px-60" style={{ fontFamily: 'Baskerville1785', fontSize: '25px' }}>
                <p>
                    <span className="tab"></span>
                    {/* randomly get a line from quotes.txt */}
                    {quote}
                    <br />
                    <span className="tab"></span> <span style={{ fontFamily: 'OldLondon', fontSize: '20px' }}>  - Edgar Allan Poe</span>
                </p>
            </div>
        </div >
    );
}

export default poe;