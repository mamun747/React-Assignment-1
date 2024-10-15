import CN from '../Function/Cn'
export const Container = ({children, classname}) => {
  return (
    <>
        <div className={CN(" px-[70px] pt-[40px] mx-auto", classname)}>
            {children}
        </div>
    </>
  )
}