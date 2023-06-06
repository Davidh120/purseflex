import { useRouteError } from "react-router-dom";
import styles from '../style'
import { errorImg } from "../assets";
import { Nav, Footer } from '../components'
import { Button } from "../components/button/Button";
import { Scroll } from '../components/Scroll'

export default function ErrorPage() {
  Scroll()
  const error = useRouteError();
  console.error(error);

  return (
    <div className='bg-primary w-full overflow-hidden' id="error-page">
      <header className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Nav page={true} />
        </div>
      </header>

      <main>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <section className={`flex md:flex-row flex-col sm:px-16 px-6 md:mt-6 mt-20`}>
              <div className={`flex flex-1 flex-col ${styles.flexStart}`}>
                <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white">Ooops!</h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Discovering a <b>404</b> error in your financial control? No need to fret! We're here to guide you towards your next opportunity for financial mastery.</p>
                <Button styles="mt-10" title="Back to Home" link="/" />
              </div>
              <div className="flex-1">
                <a href="https://storyset.com/web" target="_blank">
                  <img src={errorImg} alt="Web illustrations by Storyset" className="w-[100%] h-[100%]"/>
                </a>
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> //gradients
                <div className="absolute z-[0] w-[30%] h-[30%] right-20 bottom-20 blue__gradient" />
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </footer>
    </div>
  );
}