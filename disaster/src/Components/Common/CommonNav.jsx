import { useState } from "react";
import { navItem } from "../Data/data";
import { Search } from "../icons/Icon";
import { MobileNav } from "./MobileNav";
import { NavLink } from "react-router-dom";
export const CommonNav = () => {
    const [active, setActive] = useState(false);
    const handleToggle = () => {
        setActive(pre => !pre);
    }
  return (
    <>
      <nav className=" bg-dark-gray py-[23px]">
        <div className="flex justify-between items-center px-2 md:px-5 lg:px-[85.5px]">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <div>
          <div className="md:flex hidden gap-2 lg:gap-[18px] xl:gap-[35px]">
            {navItem.map((navItems, i) => (
              <NavLink key={i} to={`/${navItems}`}><p className="lg:text-[14px] md:text-twelve text-[10px] text-accent cursor-pointer">
                {navItems}
              </p></NavLink>
            ))}
          </div>
        </div>

        <div>
        <div className=" flex gap-[3px] md:gap-[7px] lg:gap-[9px] items-center">
            <button className="space-y-1 md:hidden block" onClick={handleToggle}>
                <div className="w-5 h-1 bg-accent"></div>
                <div className="w-5 h-1 bg-accent"></div>
                <div className="w-5 h-1 bg-accent"></div>
            </button>
          <div className="relative md:block hidden">
            <div>
            <img src="/bell.png" alt="" />
            <div className="w-[10px] h-[10px] bg-[#4ADE80] border rounded-full absolute top-0 right-0 border-white"></div>
          </div>
            </div>
            <div className="md:flex items-center hidden">
          <img src="/profile.png" alt="" />
          <div className="text-normal-accent">
            <p className="text-[14px] lg:text-base">Usman Zafar</p>
            <p className="text-twelve lg:text-sm">usmanzafar@gmail.com</p>
          </div>
          </div>
        </div>
        </div>
        </div>
        {/* devide line starts*/}
        <div className="w-full border border-[#3F3F46] rounded-[10px] mt-[17px]"></div>
        {/* devide line ends*/}

        <div className="flex justify-between items-center px-3 md:px-5 lg:px-10 xl:px-[86px] pt-8">
            <div>
                <p className="text-accent text-[12px] pb-[6px]">Welcome back</p>
                <h1 className="text-black font-bold text-lg md:text-[26px] leading-[33.15px]">Dashboard</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-[10px] lg:gap-3 xl:gap-[14px] items-center">
                <div className="flex items-center bg-white gap-[5px] text-accent rounded-md border-0 outline-none py-[10px] md:py-[15px] lg:py-[17px] text-[10px] md:text-twelve pl-1 md:pl-[10px]">
                    <Search/>
                    <input type="text" placeholder="Search incident" className="border-0 outline-none"/>
                </div>
                <div className="flex items-center bg-white gap-[5px] rounded-md border-0 outline-none py-[10px] md:py-[15px] lg:py-[17px] px-[10px] text-[10px] md:text-twelve">
                    <p className="text-normal-accent">Sort By: </p>
                    <input type="text" placeholder="Date modified" className="border-0 outline-none text-accent"/>
                </div>
                <div>
                    <button className="text-twelve bg-orange text-white py-[10px] md:py-[17px]    px-3 md:px-[25px] rounded-[6px] font-bold">
                    Cypher AI
                    </button>
                </div>
            </div> 
        </div>
        {active && <MobileNav onclick={handleToggle}/>}
      </nav>
    </>
  );
};
