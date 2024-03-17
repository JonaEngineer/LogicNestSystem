import React from 'react'
import './Shipping.css'

function Shipping() {
    return (
        <div>
            <section className='father-container-shipping-principal'>
                <article className='son-container-shipping-principal'>
                    <div className='imgs-container-shipping-principal'>
                        <div className='son-img-container-shipping-principal'>
                            <img className='img-shipping-principal' src="/principalWebsite/6frame/sh1.png" alt="" />
                        </div>
                        <div className='son-img-container-shipping-principal'>
                            <img className='img2-shipping-principal' src="/principalWebsite/6frame/sh2.png" alt="" />
                            <img className='img3-shipping-principal' src="/principalWebsite/6frame/sh3.png" alt="" />
                        </div>
                    </div>

                    <div className='info-container-shipping-principal'>
                        <p className='title-container-shipping-principal'>
                            <span className='title-shipping-principal'>POWER</span><span className='title2-shipping-principal'>AND BEAUTY</span>
                        </p>
                        <h4 className='subtitle-shipping-principal'>IN ONE CASE</h4>
                        <p className='description-shipping-principal'>
                            Welcome to our premier destination for computing essentials, where power meets beauty in every product we offer and service we provide. Our carefully curated selection of computing goods isn't just about fulfilling your technical needs; it's about delivering performance that exceeds expectations, housed within designs that are nothing short of stunning. From high-demand computing devices that boast unparalleled efficiency and speed, to technical and maintenance services that ensure your setup is always in prime condition, we ensure that every interaction with our products and services adds a touch of elegance to your digital experience. Discover the perfect blend of power and beauty with us, where your computing desires are met with sophistication and prowess
                        </p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Shipping