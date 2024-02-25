"use client";

import Core from "@/components/core";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: "Github",
      link: "https://github.com/MasaSensei",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/muhammad-hasan-syafi-i/",
      icon: <FaLinkedin />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/darktoyami/",
      icon: <FaInstagram />,
    },
    {
      name: "Gmail",
      link: "masasensei26@gmail.com",
      icon: <MdEmail />,
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container flex flex-col items-center justify-center z-20">
      <div className="grid gap-4 grid-cols-1 w-full">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/profile.jpeg"
            alt="wepik"
            width={600}
            height={600}
            className="lg:w-80 lg:h-80 w-56 h-56 overflow-hidden rounded-full"
          />
        </div>
        <div className="flex flex-col text-center text-white items-center justify-center">
          <h1 className="text-2xl font-bold">Hello I&#39;m</h1>
          <h1 className="lg:text-5xl text-3xl font-bold mt-4 text-white">
            <Core.AutoWrite text="MUHAMMAD HASAN SYAFI'I" speed={250} />
          </h1>
          <p className="text-white my-4">web developer</p>
          <div className="flex mt-5 relative lg:flex-row flex-col w-full items-center justify-center gap-4">
            <Button
              asChild
              className="p-5 relative lg:absolute lg:right-[50%] mx-3 bg-lime-500"
            >
              <Link href="https://drive.google.com/file/d/1bgiVE1AQmxVXTP3cjZ9lSM67vX97fTol/view?usp=sharing">
                {" "}
                See My Cv
              </Link>
            </Button>
            <Button
              className={`p-5 bg-lime-500 lg:absolute mx-3 relative lg:left-[50%] ${
                isOpen ? "hidden" : ""
              }`}
              onClick={toggleMenu}
            >
              Contact Me
            </Button>
            {isOpen && (
              <div className="lg:absolute lg:left-[50%] relative flex gap-4">
                {contacts.map((contact, index) => (
                  <div key={index} className={`relative`}>
                    {contact.name.toLowerCase() === "gmail" ? (
                      <Link
                        href={`mailto:${contact.link}`}
                        className="text-white flex gap-2 items-center"
                        target="_blank"
                      >
                        {contact.icon} {contact.name}
                      </Link>
                    ) : (
                      <Link
                        href={contact.link}
                        className="text-white flex gap-2 items-center"
                        target="_blank"
                      >
                        {contact.icon} {contact.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
