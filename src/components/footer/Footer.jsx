import styles from "../../style"
import { footerLinks, socialMedia } from "../../constants"

export const Footer = () => (
  <section id="footer" className={`${styles.flexCenter} sm:pt-16 pt-6 flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <h1 className='logo text-4xl object-contain'>Purse<span className='text-purple-500'>Flex</span></h1>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Empower your finances with seamless control and unmatched security.</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink, index) => (
          <div key={index} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li id={link.name} key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-purple-500 cursor-pointer ${index !== footerLink.links.length-1 ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex w-full justify-between md:flex-row flex-col py-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">© 2023 PurseFlex. All Rights Reserved.</p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img src={social.icon} alt={social.icon} key={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1 ? 'mr-6' : 'mr-0'}`}/>
        ))}
      </div>
    </div>
  </section>
)
