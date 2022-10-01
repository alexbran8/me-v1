import React from "react";
import { SiGithub, SiGitlab, SiLinkedin, SiCodepen } from 'react-icons/si';
import './Footer.css'
export const Footer = ()=> {
    return (
        <div className="footer">
            <div className="inline-portofolio">
                <a href="https://github.com/alexbran8" target="blank" className="inline-portofolio-icon"><SiGithub /></a>
                <a href="https://gitlab.com/alexbran8" target="blank" className="inline-portofolio-icon"><SiGitlab /></a>
                <a href="https://codepen.io/alexbran8" target="blank" className="inline-portofolio-icon"><SiCodepen /></a>
                <a href="https://www.linkedin.com/in/alexandru-bran-648ba9a4/" target="blank" className="inline-portofolio-icon"><SiLinkedin /></a>
            </div>
    </div>
    )
}