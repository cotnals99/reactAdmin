import React, {useState} from "react";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import {UilSignOutAlt} from '@iconscout/react-unicons'

import "./SideBar.css";

const SideBar = () => {

    const [selected, setSelected] = useState(0)
  return (
    <div className="SideBar">
        {/* Logo */}
      <div className="Logo">
        <img src={Logo} alt="" />
        <span>
            Sh<span>o</span>ps
        </span>
      </div>

      {/* Menu */}
      <div className="Menu">
        {SidebarData.map((item, index)=>{
            return(
                <div className={selected===index?'menuItem active':'menuItem'}
                key={index}
                onClick={()=>setSelected(index)}
                >
                    <item.icon/>
                    <span>
                        {item.heading}
                    </span>

                </div>
            )
        })}
        <div className="menuItem">
        <UilSignOutAlt/>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
