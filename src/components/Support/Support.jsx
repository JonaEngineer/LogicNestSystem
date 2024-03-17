import React from 'react'
import './Support.css'

function Support() {
  return (
    <div>
      <section className='father-container-support-principal'>
        <article className='son-container-support-principal'>
          <div className='container-support-principal'>
            <img className='img-support-principal' src="/principalWebsite/4frame/notepad.png" alt="" />
            <div className='normal-div'>
              <span className='first-title-support-principal'>5 Year</span><span className='first-title2-support-principal'>Warranty</span>
            </div>
            <p className='description-support-principal'>We offer a warranty of up to 5 for labor & up to 10 years for parts replacement</p>
          </div>

          <div className='container-support-principal'>
            <img className='img-support-principal' src="/principalWebsite/4frame/diamond.png" alt="" />
            <div className='normal-div'>
              <span className='second-title-support-principal'>Lifetime</span><span className='second-title2-support-principal'>Support</span>
            </div>
            <p className='description-support-principal'>Our technical support staff is highly knowledgeable deep learning frameworks</p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Support