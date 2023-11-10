import { useRef, useEffect } from "react"

//assets and data
import styles from "../../style"
import { dashboard } from "../../assets"
import { Discount } from "../discount/Discount"
import { Button } from "../button/Button"

const Home = ({timeline, ease}) => {
  let home = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  useEffect(() => {
    const headlineFirst = content.children[0].children[0]
    const headlineSecond = content.children[1]
    const contentP = content.children[2]
    const contentButton = content.children[3]

    timeline.staggerFrom([headlineFirst, headlineSecond, contentP, contentButton], .7, {opacity: 0, x: -200, skewY:10, ease: ease}, .15)

    timeline.from(images, 1, {opacity: 0, x: 1000, ease: ease})
      .from(images, 1.5, {scale:1.6, ease: ease}, "-=1", .15)
  }, [])

  return (
    <section id='home' className={`md:flex-row flex-col ${styles.flexStart} ${styles.paddingY} ${styles.marginY} mt-10 h-full content-center`} ref={el => home = el}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} ref={el => content = el}>
        {/* <Discount percentage="25%"/> */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Next-Gen <br className="sm:block hidden" /> {" "}
            Financial <br className="sm:block hidden" /> {" "}
          </h1>
        </div>
        <h2 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Control Tools.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Through our cutting-edge web platform, we provide a comprehensive <em>financial control service</em> to empower you in managing your finances effectively. </p>
        <Button styles="mt-10" title="Get Started fro Free" link="/pricing" />
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:ml-0 ml-20 md:my-0 my-5 relative`}>
        <img src={dashboard} alt="robot" className="w-[100%] h-[100%] relative z-[5]" ref={el => images = el}/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> //gradients
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[30%] h-[30%] right-20 bottom-20 blue__gradient" />
      </div>
      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div> */}
    </section>
  )
}

export default Home