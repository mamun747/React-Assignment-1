import { CN } from "../Function/Cn"

export const Button = ({children, cl}) => {
  return (
    <>
      <button className={CN("text-[10px] md:text-[12px] bg-orange text-white py-[6px] md:py-[8px] px-2 md:px-[25px] rounded-md font-bold", cl)}>
        {children}
      </button>
    </>
  );
};
