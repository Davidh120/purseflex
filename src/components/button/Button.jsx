import { arrowUp } from "../../assets"

export const Button = ({ styles, title }) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}>
      {title}
    </button>
  )
}
