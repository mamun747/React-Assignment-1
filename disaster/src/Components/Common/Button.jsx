import { CN } from "../Function/Cn"

export const Button = ({children, cl}) => {
  return (
    <>
      <div className={CN("text-[10px] md:text-[12px] bg-orange text-white py-[6px] md:py-[8px] px-2 md:px-[25px] rounded-md font-bold w-[148px] h-[42px] flex justify-center items-center cursor-pointer hover:opacity-85 transition-all", cl)}>
        {children}
      </div>
    </>
  );
};
