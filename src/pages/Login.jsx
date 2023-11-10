import React from 'react'
import styles from '../style'
import { Nav, SignIn, Footer } from '../components'
import { Scroll } from '../components/Scroll'

const Login = () => {
    Scroll()

    return (
        <div className='bg-primary w-full overflow-hidden'>
            <header className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Nav page={true} />
                </div>
            </header>

            <main>
                <div className={`bg-primary ${styles.flexCenter} h-screen`}>
                    <div className={`${styles.boxWidth}`}>
                        <SignIn />
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

export default Login