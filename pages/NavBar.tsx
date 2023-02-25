import React, { useRef, useState } from "react";
import { BsList, BsX } from "react-icons/bs";

interface propsType {
  navName: string;
  handleScrollView: any;
}

export default function NavBar({ navName, handleScrollView }: propsType) {
  const style = "mx-3 hover:cursor-pointer";
  const hoverStyle = "mx-3 hover:cursor-pointer text-sky-400";
  const moblieStyle = "my-3 hover:cursor-pointer text-white text-sm";
  const moblieHoverStyle = "my-3 hover:cursor-pointer text-sky-400 text-sm";

  const menuIconRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLInputElement>(null);

  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(true);
    menuRef.current?.classList.remove("hidden");
  };

  const handleXClick = () => {
    setMenuVisible(false);
    menuRef.current?.classList.add("hidden");
  };

  return (
    <div className="w-[100%] h-[7vh] md:px-[10%] fixed bg-white z-[1]">
      <div
        ref={menuRef}
        className="menu-moving hidden fixed ml-[20%] w-[80%] h-[100vh] bg-black px-3 py-1 md:hidden z-[2] drop-shadow-2xl"
      >
        <div
          onClick={handleScrollView}
          className="flex flex-col items-center justify-center h-[70%]"
        >
          <div className={navName === "home" ? moblieHoverStyle : moblieStyle}>
            HOME
          </div>
          <div className={navName === "skill" ? moblieHoverStyle : moblieStyle}>
            SKILL
          </div>
          <div
            className={navName === "project" ? moblieHoverStyle : moblieStyle}
          >
            PROJECT
          </div>
          <div
            className={navName === "archive" ? moblieHoverStyle : moblieStyle}
          >
            ARCHIVE
          </div>
          <div
            className={navName === "contact" ? moblieHoverStyle : moblieStyle}
          >
            CONTACT
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] flex justify-between items-center text-sm px-2">
        <div className="title-font">kjin's Portfolio</div>
        <div className="md:hidden z-[2]">
          {!menuVisible ? (
            <div ref={menuIconRef}>
              <BsList
                onClick={handleMenuClick}
                size={25}
                className="hover:cursor-pointer"
              />
            </div>
          ) : (
            <div>
              <BsX
                onClick={handleXClick}
                size={25}
                color="white"
                className="hover:cursor-pointer"
              />
            </div>
          )}
        </div>
        <div onClick={handleScrollView} className="flex maxmd:hidden">
          <div className={navName === "home" ? hoverStyle : style}>HOME</div>
          <div className={navName === "skill" ? hoverStyle : style}>SKILL</div>
          <div className={navName === "project" ? hoverStyle : style}>
            PROJECT
          </div>
          <div className={navName === "archive" ? hoverStyle : style}>
            ARCHIVE
          </div>
          <div className={navName === "contact" ? hoverStyle : style}>
            CONTACT
          </div>
        </div>
      </div>
    </div>
  );
}
