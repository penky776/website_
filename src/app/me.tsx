import EmailIcon from "./email-icon";
import GithubIcon from "./github-icon";
import InstaIcon from "./insta-icon";

import '../styles/fonts.css'
import "./style.css"

function me() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <div className="flex flex-col border-y-2 shadow border-zinc-700 justify-between p-4 leading-normal" style={{ fontFamily: 'Baskerville1785', fontSize: '25px' }}>
                <center>enthusiastic about the art of the mad <br />and the non-professional<br />
                </center>
            </div>
            <div className="pb-4"></div>
            <div className="flex flex-col items-center bg-black md:flex-row md:max-w-xl">
                <EmailIcon />
                <GithubIcon />
                <InstaIcon />
            </div>
        </div>
    );
}


export default me;