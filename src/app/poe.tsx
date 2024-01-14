import '../styles/fonts.css'
import "./style.css"

function poe() {
    return (
        <div className="min-h-screen flex items-center justify-center p-8">
            <div className="flex flex-col justify-between p-4 leading-normal" style={{ fontFamily: 'OldLondon', fontSize: '30px' }}>
                <p>That the play is the tragedy “Man,” <br />
                    <span className="tab"></span> And its hero the Conqueror Worm.
                    <br />
                    <span style={{ fontFamily: 'Baskerville1785', fontSize: '20px' }}>  - Edgar Allan Poe, The Conqueror Worm</span></p>
            </div>
        </div >
    );
}


export default poe;