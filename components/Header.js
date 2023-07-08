import React from "react";
import { Smooch } from "next/font/google";

const inter = Smooch({ weight: "400", subsets: ["latin"] });

function Header({ contract }) {
  return (
    <div className="flex justify-center sm:justify-between  pt-8 border-b border-yellow-500 p-2 w-full">
      <div className="hidden sm:block ml-4 text-lg sm:text-3xl font-thin  text-yellow-500">
        SETA3
      </div>
      <div className="text-lg text-center  font-light italic text-yellow-500">
        <div className={inter.className}>
          <span className="text-3xl font-light italic">PeK </span>
        </div>
        <div>automotive</div>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
