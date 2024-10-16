import { CN } from "../Function/Cn"

export const Subtitle = ({children, classname}) => {
  return (
    <>
    <p className={CN("text-accent text-[12px] pb-[6px]", classname)}>{children}</p>
    </>
  )
}
