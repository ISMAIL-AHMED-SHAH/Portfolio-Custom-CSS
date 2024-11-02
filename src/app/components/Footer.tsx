'use client'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-title">
                <p>© Ismail Ahmed Shah</p>
            </div>
            <div className="icons flex items-center gap-4">
                <a title="LinkedIn" href="https://www.linkedin.com/in/ismail-ahmed-shah-2455b01ba/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a title="GitHub" href="https://github.com/ISMAIL-AHMED-SHAH" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
            </div>
        </div>
    );
}