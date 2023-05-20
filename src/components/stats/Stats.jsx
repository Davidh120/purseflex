import { stats } from "../../constants"
import styles from "../../style"

export const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row mx-3 mt-[-15px]`}>
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
        {index === stats.length - 1 ? '' : <span className="font-poppins font-normal xs:text-[15px] text-[10px] xs:leading-[20px] leading-[18px] text-white mx-auto ss:flex hidden">|</span>}
      </div>
    ))}
  </section>
)
