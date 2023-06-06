import { useEffect, useRef } from "react"
import { analysis } from "../../assets"
import styles, { layout } from "../../style"
import { Button } from "../button/Button"

import { gsap } from "gsap"

export const Choose = ({ ease }) => {
  let image = useRef(null)
  let title = useRef(null)
  let paragraph = useRef(null)
  let btn = useRef(null)

  useEffect(() => {
    gsap.from(image.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: ease,
      scrollTrigger: {
        trigger: image.current,
        start: 'top center',
        end: 'center center',
        scrub: 1
      }
    });

    gsap.from(title.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: ease,
      scrollTrigger: {
        trigger: title.current,
        start: 'top 80%',
        end: 'center center',
        scrub: 1
      }
    });

    gsap.from(paragraph.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: ease,
      scrollTrigger: {
        trigger: paragraph.current,
        start: 'top 85%',
        end: 'center center',
        scrub: 1
      }
    });

    gsap.from(btn.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: ease,
      scrollTrigger: {
        trigger: btn.current,
        start: 'top 90%',
        end: 'center center',
        scrub: 1
      }
    });
  }, []);

  return (
    <section id="choose_us" className={`${layout.sectionReverse} mt-24`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={analysis} alt="analysis" className="w-[100%] h-[100%] relative z-[5] rounded-md" ref={image} />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={`${layout.sectionInfo} sm:pl-10 pl-0`}>
        <h2 className={styles.heading2} ref={title}>Why should you <br className="sm:block hidden" /> choose PurseFlex</h2>
        <p className={`${styles.paragraph} mt-5`} ref={paragraph}>
          At PurseFlex, gain ultimate financial control with our powerful platform, blending cutting-edge technology and personalized insights for a secure and prosperous future.
        </p>
        <div ref={btn} className="mt-10">
          <Button styles="mt-10" title="Try free now" link="/pricing"/>
        </div>
        <div className="absolute z-[0] w-[35%] h-[20%] right-20 pink__gradient" />
      </div>
    </section>
  )
}
