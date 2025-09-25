import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-amber-500 p-3 text-white font-medium text-xl flex items-center justify-center gap-5 ">
      <Link href={"/"} className="hover:text-slate-300 ">
        Home
      </Link>
      <Link href={"/posts"} className="hover:text-slate-300 ">
        Posts
      </Link>
    </div>
  );
};

export default Header;
