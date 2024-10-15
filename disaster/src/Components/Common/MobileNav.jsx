import { navItem } from "../Data/data";

export const MobileNav = ({onclick}) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen overflow-y-hidden z-50 bg-white">
        <div className="p-2 flex justify-between items-start">
          <div>
            <img src="/logo.png" alt="" />
            <div className="space-y-1 pl-6 pt-6">
              {navItem.map((value, i) => (
                <p key={i} className="text-base text-accent cursor-pointer">
                  {value}
                </p>
              ))}
            </div>
          </div>
          <div>
          </div>
          <div>
            <div className="flex gap-2 pb-2 items-center">
            <img src="/profile.png" alt="" />
            <div className="relative">
            <img src="/bell.png" alt="" />
            <div className="w-[10px] h-[10px] bg-[#4ADE80] border rounded-full absolute top-0 right-0 border-white"></div>
          </div>
          <button className="text-3xl text-accent" onClick={onclick}>&times;</button>
            </div>
            <div className="text-normal-accent">
              <p className="text-[14px]">Usman Zafar</p>
              <p className="text-twelve">usmanzafar@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
