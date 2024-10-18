import { useNavigate } from "react-router-dom";
import { Navbar } from "../Home/Navbar"
import { Button } from "./Button"

export const ErrorMsg = () => {
    document.getElementsByTagName('body')[0].style.background = "#dddddd";
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/Dashboard');
    }
  return (
    <>
    <div className="flex flex-col gap-3 justify-center items-center w-full h-[600px]">
        <h1 className="font-bold text-6xl text-accent">503</h1>
        <p className="text-2xl font-semibold text-accent">Service Unavailable :(</p>
        <p className="text-sm md:text-lg text-accent max-w-screen-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis pariatur eos error cum odit quidem aliquam, quam molestias maxime, enim ex culpa adipisci, fugit nobis! Quod rem reiciendis sunt? Impedit.</p>
        <button onClick={handleClick}><Button>Go Back</Button></button>
    </div>
    </>
  )
}
