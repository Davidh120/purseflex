import { useRef, useEffect } from "react";
import { features } from "../../constants"
import styles, { layout } from "../../style"
import { Button } from "../button/Button"

import { gsap } from "gsap"

const FeauteCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

export const About = ({ease}) => {
  let content1 = useRef(null)
  let content2 = useRef(null)

  useEffect(() => {
    gsap.from(content1.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: ease,
      scrollTrigger: {
        trigger: content1.current,
        start: 'top 90%',
        end: 'center center',
        scrub: 1
      }
    });

    gsap.from(content2.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: ease,
      scrollTrigger: {
        trigger: content2.current,
        start: 'top 90%',
        end: 'center center',
        scrub: 1
      }
    });
  }, []);

  return (
    <section id="about_us" className={`${layout.section} lg:h-screen`}>
      <div className={layout.sectionInfo} ref={content1}>
        <h2 className={`${styles.heading2}`} data-scroll data-scroll-speed="2">Focus on your vision, <br className="sm:block hidden" /> we'll master the financial mission.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} data-scroll data-scroll-speed="2">Empower yourself with our all-inclusive platform, seize control of your <b>finances</b>, and pave the way for a brighter future filled with financial security and abundance.</p>
        <div className="mt-10">
          <Button styles="mt-10" title="Get Started" link="/pricing"/>
        </div>
      </div>

      <div className={`${layout.sectionImg} flex-col`} ref={content2}>
        {features.map((feature, index) => (
          <FeauteCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}
