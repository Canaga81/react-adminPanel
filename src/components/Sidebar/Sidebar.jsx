import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import { FaRegCircleRight } from "react-icons/fa6";
import { useState } from "react";

const Sidebar = () => {

    const [selected, setSelected] = useState(0);


  return (

    <div className="Sidebar">

      {/* Logo */}
      <div className="logo">

        <img src={Logo} alt="" />

        <span>
          Sh<span>o</span>ps
        </span>

      </div>

      {/* Menu */}
      <div className="menu">

        {SidebarData.map((item, index) => (

          <div onClick={() => setSelected(index)} key={index} className={selected === index ? `menuItem active` : `menuItem`}>

            <item.icon/>
            <span>{item.heading}</span>

          </div>

        ))}

        <div className="menuItem">
            <FaRegCircleRight />
        </div>

      </div>

    </div>

  );

};

export default Sidebar;