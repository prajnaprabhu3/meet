"use client";

import Button from "./button";
import Toggle from "./toggle";
import { FiCommand } from "react-icons/fi";
import { HiOutlineDownload } from "react-icons/hi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FiCopy } from "react-icons/fi";
import { useState } from "react";
import { useKmenu } from "kmenu";

type Variant = "bg-gray-800" | "bg-rose-400";

const Menu: React.FC = () => {
  const [toggleColor, setToggleColor] = useState<Variant>("bg-gray-800");
  const { toggle } = useKmenu();

  function onToggle() {
    toggleColor == "bg-gray-800"
      ? setToggleColor("bg-rose-400")
      : setToggleColor("bg-gray-800");
  }

  return (
    <div className="fixed mx-auto bottom-10 w-screen z-50 flex items-center justify-center">
      <menu className="flex items-center justify-around bg-[#F4F4F5] w-[410px] px-2 h-12 rounded-lg">
        <Toggle onClick={onToggle} color={toggleColor} />

        {/* buttons  */}
        <div className="flex gap-x-2">
          <Button title="Save" Icon={HiOutlineDownload} />
          <Button title="Copy" Icon={FiCopy} />
          <Button title="Photo" Icon={HiOutlinePhotograph} />
        </div>

        {/* <FiCommand onClick={toggle} className="cursor-pointer" /> */}
        <button
          className="hidden md:flex items-center hover:bg-white px-2 py-[8px] rounded hover:scale-105 transition-transform duration-300"
          onClick={toggle}
        >
          <FiCommand />
        </button>
      </menu>
    </div>
  );
};

export default Menu;
