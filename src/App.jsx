import React, { useEffect } from 'react'
import styles from './style'
import { Nav, Home, Choose, About, Footer } from './components'
import { Scroll } from './components/Scroll'

//GSAP
import { gsap, Power3 } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App = () => {
  Scroll()

  let tl = gsap.timeline()
  let ease = Power3.easeOut()
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Nav timeline={tl} ease={ease}/>
        </div>
      </header>

      <main>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Home timeline={tl} ease={ease}/>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            {/* <Stats /> */}
            <About ease={ease} />
            <Choose ease={ease} />
          </div>
        </div>
      </main>

      <footer className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </footer>
    </div>
  )
}

export default App