"use client";

import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { SiBookstack } from "react-icons/si";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();

  const navbars = [
    {
      name: "Home",
      link: "/",
      icon: <AiFillHome />,
    },
    {
      name: "user",
      link: "/about",
      icon: <FaUser />,
    },
    {
      name: "Projects",
      link: "/project",
      icon: <SiBookstack />,
    },
  ];

  return (
    <nav className="fixed flex bottom-10 z-10 left-0 right-0 justify-center items-center">
      <div className="bg-slate-100 flex flex-row gap-1 items-center justify-center relative p-3 rounded-full opacity-80">
        <div className="absolute inset-0 rounded-full backdrop-blur-md opacity-75"></div>
        {navbars.map((navbar, index) => (
          <div
            key={index}
            className={`relative ${
              pathname === navbar.link ? "bg-lime-500 rounded-full" : ""
            }  p-2 group hover:bg-lime-500 hover:rounded-full`}
          >
            <Link href={navbar.link}>
              <div
                className={`p-1 text-2xl ${
                  pathname === navbar.link ? "text-slate-100" : ""
                } group-hover:text-slate-100`}
              >
                {navbar.icon}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
