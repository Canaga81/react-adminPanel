import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import { FaRegCircleRight } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }

  return (
    <>
      <div 
      className="bars" style={expanded ? { left: "60%" } : { left: "5%" }}
      onClick={() => setExpanded(!expanded)}
      >
        <FaBars />
      </div>

      <motion.div
      variants={sidebarVariants}
      animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      className="Sidebar">
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
            <div
              onClick={() => setSelected(index)}
              key={index}
              className={selected === index ? `menuItem active` : `menuItem`}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          ))}

          <div className="menuItem">
            <FaRegCircleRight />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
