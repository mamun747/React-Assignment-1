import { CN } from '../Function/Cn'
export const Container = ({children, classname}) => {
  return (
    <>
        <div className={CN("px-[20px] pt-[20px] md:px-[70px] md:pt-[40px] mx-auto pb-3", classname)}>
            {children}
        </div>
    </>
  )
}