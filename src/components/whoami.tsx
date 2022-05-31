import React from 'react'
import profilePicture from '../profile_pic.jpg';
import { SiGithub, SiGitlab, SiLinkedin, SiCodepen } from 'react-icons/si';



export const WhoamI = () => {

    return (
        <>
            <article>
                <h2>whoami?</h2>
                <div className="flex-body">
                    <div className="flex-row">
                        <div>
                            <img className="img-circle img-responsive img-bordered-primary" src={profilePicture} alt="alexandru bran" />
                            <h5 className="text-capitalize">Alexandru Bran</h5>
                            <div className="inline-portofolio">
                                <a href="https://github.com/alexbran8" target="blank" className="inline-portofolio-icon"><SiGithub /></a>
                                <a href="https://gitlab.com/alexbran8" target="blank" className="inline-portofolio-icon"><SiGitlab /></a>
                                <a href="https://codepen.io/alexbran8" target="blank" className="inline-portofolio-icon"><SiCodepen /></a>
                                <a href="https://www.linkedin.com/in/alexandru-bran-648ba9a4/" target="blank" className="inline-portofolio-icon"><SiLinkedin /></a>
                            </div>
                            {/* <p className="text-muted text-capitalize">full stack developer @ Nokia Networks Romania</p> */}
                        </div>
                    </div>
                    <div className="flex-column">
                        <div>JavaScript enthusiast. Passionate about web development and modern technologies. Eager on knowledge sharing and community development.</div>
                        <p>What do I do when I don't write code?</p>
                    </div>
                </div>
            </article>
        </>
    )
}