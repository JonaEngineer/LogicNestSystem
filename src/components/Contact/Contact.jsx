import React from 'react'
import './Contact.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Contact() {
    return (
        <div>
            <footer className='pie-pagina'>
                <div className='grupo-1'>
                    <div className='box'>
                        <figure>
                            <a href="#">
                                <img src="/principalWebsite/8frame/lgNest.png" alt="" />
                            </a>
                        </figure>
                    </div>
                    <div className='box'>
                        <h2>ABOUT US</h2>
                        <p>We are a company with the most avant-garde tools and technology in Nicaragua, bringing excellent quality of products and services to our clients, taking into account their needs, requirements and expectations.</p>
                    </div>
                    <div className='box'>
                        <h2>FOLLOW US</h2>
                        <div className="red-social">
                            <a href="https://www.facebook.com" className="icon facebook"><FaFacebookF /></a>
                            <a href="https://www.instagram.com" className="icon instagram"><FaInstagram /></a>
                            <a href="https://www.twitter.com" className="icon twitter"><FaTwitter /></a>
                            <a href="https://www.youtube.com" className="icon youtube"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
                <div className='grupo-2'>
                    <small>&copy; 2024 <b>LogicNest System</b> - All Rights Reserved</small>
                </div>
            </footer>
        </div>
    )
}

export default Contact