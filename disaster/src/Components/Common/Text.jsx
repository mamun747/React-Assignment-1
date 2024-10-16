import { CN } from "../Function/Cn";

export const Text = ({children, classname}) => {
  return (
    <h1 className={CN("text-[#030712] font-bold text-lg md:text-[26px] leading-[33.15px]", classname)}>
      {children}
    </h1>
  );
};

export const Title = ({children, classname}) => {
  return(
    <>
    <h1 className={CN("font-bold text-2xl text-[#09090B]", classname)}>{children}</h1>
    </>
  )
}