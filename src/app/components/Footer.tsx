'use client'
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {

    return (
        <div className="footer">
            <div className="footer-title">
                <p>© Ismail Ahmed Shah</p>
            </div>
            <div>
                <a title="LinkedIn" href="https://www.linkedin.com/in/ismail-ahmed-shah-2455b01ba/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
                <a title="GitHub" href="https://github.com/ISMAIL-AHMED-SHAH" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a title="WhatsApp" href="https://wa.me/+923322241405" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp/>
                </a>
                <a title="Instagram" href="https://www.instagram.com/ahmedshahismail?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram/>
                </a>
            </div>
        </div>
    );
}