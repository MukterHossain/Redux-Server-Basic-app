// import Logo from "@/../assets/nature-logo.png"

import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

export default function Navbar(){
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            <div className="flex w-full justify-between ">
                <div className="flex items-center  w-1/5">
                {/* <Logo></Logo>  */} M
                {/* <img src={Logo} alt="" /> */}
                <span className="font-bold ml-2">Master</span>
            </div>
            <div className="flex justify-center gap-x-4 w-4/5 ">
                    <Link to="/tasks">Tasks</Link>
                <Link to="/users">Users</Link>
                </div>
                <div>
                    <ModeToggle></ModeToggle>
                </div>
            </div>
        </nav>
    )
}