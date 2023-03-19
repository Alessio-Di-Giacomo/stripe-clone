import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
            <h1>Ifrastruttura di pagamenti per Internet</h1>
          <p>
          Milioni di aziende di ogni dimensione, dalle start-up alle grandi imprese, si affidano al software e alle API di Stripe per accettare pagamenti, inviare bonifici e gestire l'attività online.
          </p>
          <button className="btn">
            Inizia ora
          </button>
        </article>
        <article className='hero-images'>
          <img className='phone-img' alt="phone" src={phoneImg}></img>
        </article>
      </div>
    </section>
  )
}

export default Hero
