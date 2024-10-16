import { useState } from "react";
import { navItem } from "../Data/data";
import { MobileNav } from "./MobileNav";
import { NavLink } from "react-router-dom";

export const CommonNav = () => {
    const [active, setActive] = useState(false);
    const handleToggle = () => {
        setActive(prev => !prev);
    };

    return (
        <>
                <div className="flex justify-between items-center px-2 md:px-5 lg:px-[85.5px]">
                    <div>
                        <img src="/logo.png" alt="Logo" />
                    </div>
                    <div>
                        <div className="md:flex hidden gap-2 lg:gap-[18px] xl:gap-[35px]">
                            {navItem.map((navItems, i) => (
                                <NavLink key={i} to={`/${navItems}`}>
                                    <p className="lg:text-[14px] md:text-twelve text-[10px] text-accent cursor-pointer">
                                        {navItems}
                                    </p>
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-[3px] md:gap-[7px] lg:gap-[9px] items-center">
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

                {/* Divider line */}
                <div className="w-full border border-[#3F3F46] rounded-[10px] mt-[17px]"></div>
                {active && <MobileNav onclick={handleToggle} />}
        </>
    );
};
