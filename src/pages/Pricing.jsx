import React from 'react'
import styles from '../style'
import { Nav, Footer } from '../components'

const Pricing = () => {
    return (
        <div className='bg-primary w-full overflow-hidden'>
            <header className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Nav page={true} />
                </div>
            </header>

            <main>
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <p className='text-white'>Pricing</p>
                    </div>
                </div>
            </main>

            <footer className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

export default Pricing
