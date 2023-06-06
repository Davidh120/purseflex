import { arrowUp } from "../../assets"

export const Button = ({ styles, title, link }) => {
  return (
    <a href={`/purseflex${link}`} className={`py-4 px-6 bg-purple-gradient font-semibold text-white outline-none rounded-[10px] ${styles}`}>
      {title}
    </a>
  )
}
