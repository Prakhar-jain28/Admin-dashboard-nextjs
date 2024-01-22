"use client"
import { usePathname } from "next/navigation";
import Styles from "./navbar.module.css"
import {MdNotifications,MdOutlineChat, MdPublic,MdSearch} from "react-icons/md"
const Navbar = () => {
    const pathName = usePathname();
  return(
        <div className={Styles.container}>
            <div className={Styles.title}>
                {pathName.split("/").pop()}
            </div>
            <div className={Styles.menu}>
                <div className={Styles.search}>
                    <MdSearch/>
                    <input type="text" placeholder="Search.." className={Styles.input}/>
                </div>
                <div className={Styles.icons}>
                    <MdOutlineChat size={20}/>
                    <MdNotifications size={20}/>
                    <MdPublic size={20}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
