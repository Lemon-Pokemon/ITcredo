import { useState } from "react";

import './FaqBlock.css'

function FaqBlock({ quastion, answer }) {
    const cross = <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
    <circle cx="32" cy="32.5605" r="4" transform="rotate(-90 32 32.5605)" fill="white" />
    <path d="M32 33.5605L32 32.5605" stroke="url(#paint0_linear_359_569)" />
    <path d="M64 32.5605L0 32.5605" stroke="url(#paint1_linear_359_569)" />
    <defs>
        <linearGradient id="paint0_linear_359_569" x1="32" y1="32.5605" x2="32" y2="33.5605" gradientUnits="userSpaceOnUse">
            <stop stop-color="#D9D9D9" stop-opacity="0" />
            <stop offset="0.5" stop-color="#D9D9D9" />
            <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_359_569" x1="0" y1="32.5605" x2="64" y2="32.5605" gradientUnits="userSpaceOnUse">
            <stop stop-color="#D9D9D9" stop-opacity="0" />
            <stop offset="0.5" stop-color="#D9D9D9" />
            <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
        </linearGradient>
    </defs>
</svg>

    const [isOpen, setIsOpen] = useState(false)

    const toggleContent = () => {
        setIsOpen(isOpen? false: true);
      };
    return (
        <div className="faq_block" style={{borderRadius: `${isOpen? "12px":""}`, alignItems:`${isOpen? "": "center"}`}}>
            <div className="faq_text">
                <p className="quastion" style={{color:`${isOpen?"#C9A8FF":"white"}`}}>{quastion}</p>
                <p className={`answer ${ isOpen? "" : "hidden"}`}>{answer}</p>
            </div>
            <div className={`cross ${isOpen?"cross-open":""}`} onClick={ ()=> toggleContent()}>
                <div className="cross vertical">{cross}</div>
                <div className="cross horizontal">{cross}</div>
            </div>
        </div>
    )
}

export default FaqBlock;