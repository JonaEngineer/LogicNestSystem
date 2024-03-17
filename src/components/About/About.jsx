import React from 'react'
import './About.css'

function About() {
    return (
        // about us and service
        <div>
            <section className='body-2frame'>
                <div className='information-container-about-principal'>
                    <p className='p1-about'>
                        <span className='title1-p-about-principal'>Take our Technical</span>
                    </p>
                    <p className='p2-about'>
                        <span className='title2-p-about-principal'>Service</span> <span className='title3-p-about-principal'>to</span>
                    </p>
                    <p className='p3-about'>
                        <span className='title4-p-about-principal'>Another</span> <span className='title5-p-about-principal'>Level</span>
                    </p>
                    <p className='description-p-about-principal'>We are a company with the most avant-garde tools and technology in Nicaragua, bringing excellent quality of products and services to our clients, taking into account their needs, requirements and expectations.</p>
                    <div className='btns-container-p-about-principal'>
                        <button className='btn1-p-about-principal'>View More</button>
                        <button className='btn2-p-about-principal'>Contact Us</button>
                    </div>
                </div>

                <div className='video-container-about-principal'>
                    <video className='video-about-principal' src="./principalWebsite/2frame/videoFrame2.mp4" loop muted autoPlay></video>
                </div>
            </section>
        </div>
    )
}

export default About