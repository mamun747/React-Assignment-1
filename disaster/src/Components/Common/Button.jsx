export const Button = ({children}) => {
  return (
    <>
      <button className="text-twelve bg-orange text-white py-[10px] md:py-[17px] px-3 md:px-[25px] rounded-[6px] font-bold">
        {children}
      </button>
    </>
  );
};
