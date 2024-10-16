import { CN } from "../Function/Cn"

export const CommonContainer = ({children, classname}) => {
  return (
    <>
    <div className={CN("max-w-[753px] h-[445px] md:text-start text-center mx-auto mt-10", classname)}>
        {children}
    </div>
    </>
  )
}
