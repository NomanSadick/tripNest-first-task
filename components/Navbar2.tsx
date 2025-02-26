"use client";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
// import Logo from "../public/images/logo.svg";

import { useRouter } from "next/navigation";
import Button from "./reusableComponents/Button";
import Image from "next/image";

const Navbar2 = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [dropDownProfile, setDropDownProfile] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 760);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleController = () => {
    setToggle(!toggle);
  };

  const dropDownProfileState = () => {
    setDropDownProfile(!dropDownProfile);
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const routerPush = (url: string) => {
    router.push(url);
    setToggle(false);
  };

  return (
    <div>
      <div className={navContainer}>
        <div className="container-custom flex items-center justify-between w-full h-full text-slate-700 z-40 py-2">
          <div className={logo}>
            <div className="">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={1000}
                height={1000}
                className="object-cover w-[100%]"
              />
            </div>
          </div>
          <div className={navItem}>
            <span
              onClick={() => router.push("/packages")}
              className="cursor-pointer hover:text-teal_blue flex items-center justify-center gap-x-1"
            >
              <span>Packages</span>
              <FaChevronDown size={8} />
            </span>
            <span
              onClick={() => router.push("/packages/CustomizedPackage")}
              className="cursor-pointer hover:text-teal_blue"
            >
              Customize
            </span>
            <span
              className={`cursor-pointer && "text-teal_blue border-b-2 border-teal_blue"}`}
              onClick={() => router.push("/")}
            >
              Visa
            </span>
            <div className="group cursor-pointer relative">
              <div className="flex justify-center items-center gap-x-1">
                <span className="cursor-pointer hover:text-teal_blue">
                  Others
                </span>
                <IoIosArrowDown size={12} />
              </div>
              <div className="absolute left-0 top-4 hidden group-hover:block mt-2 w-48 py-2 bg-white shadow-lg rounded-lg">
                <div className="flex flex-col justify-start items-start pl-2 gap-y-2">
                  <span
                    onClick={() =>
                      openInNewTab("https://tripnest.net/about-us/")
                    }
                    className="cursor-pointer hover:border-b-[1px] hover:border-teal_blue hover:text-teal_blue w-full"
                  >
                    About Us
                  </span>
                  <span
                    onClick={() =>
                      openInNewTab("https://tripnest.net/contact/")
                    }
                    className="cursor-pointer hover:border-b-[1px] hover:border-teal_blue hover:text-teal_blue w-full"
                  >
                    Contact
                  </span>
                  <span
                    onClick={() => openInNewTab("https://tripnest.net/faqs/")}
                    className="cursor-pointer hover:border-b-[1px] hover:border-teal_blue hover:text-teal_blue w-full"
                  >
                    Faq
                  </span>
                </div>
              </div>
            </div>
            <div
              onClick={dropDownProfileState}
              className="relative cursor-pointer"
            >
              <CgProfile size={28} className="text-slate-500" />
              <div
                className={`${
                  !dropDownProfile
                    ? "hidden"
                    : "absolute left-0 bottom-30 flex-center-col p-4 gap-y-4 bg-slate-100 rounded-lg shadow-md w-28"
                }`}
              >
                <span className="cursor-pointer hover:bg-slate-200">
                  LOGOUT
                </span>
              </div>
            </div>
            <div className="pl-5 flex space-x-4">
              <Button
                title="Sign Up"
                handleClick={() => routerPush("/signup")}
                containerStyles="rounded-md px-8 py-2 bg-orange-deep text-white text-sm"
              />
              <Button
                title="Login"
                handleClick={() => routerPush("/login")}
                containerStyles="rounded-md px-8 py-2 bg-orange-deep text-white text-sm"
              />
            </div>
          </div>
          <div onClick={toggleController} className={toggleBtn}>
            {toggle ? (
              <FaTimes className="text-orange-deep" />
            ) : (
              <FaBars className="text-orange-deep" />
            )}
          </div>
          {toggle && (
            <div
              onClick={toggleController}
              className={`fixed h-full w-full top-[68px] right-0 bg-primary flex flex-col items-center justify-start gap-4 z-50 ${
                toggle && isMobile && "bg-neutral-800/70"
              }`}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute h-screen w-[50%] lg:w-52 top-0 right-0 flex justify-center items-center bg-orange-thin translate duration-300 ${
                  toggle && isMobile
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <div className="h-full w-full p-6 pt-12 flex flex-col justify-between items-end text-black">
                  <div className="flex flex-col justify-end items-end gap-y-2">
                    <div className="text-start">
                      <span
                        onClick={() =>
                          openInNewTab(
                            "https://tripnest.net/all-packages-top-search/"
                          )
                        }
                        className="cursor-pointer hover:border-b-[.5px] hover:border-teal_blue hover:text-teal_blue w-full text-end"
                      >
                        <span onClick={toggleController}>Packages</span>
                      </span>
                    </div>
                    <div onClick={toggleController}>
                      <span
                        onClick={() =>
                          router.push("/packages/CustomizedPackage")
                        }
                        className="cursor-pointer hover:text-teal_blue"
                      >
                        Customize
                      </span>
                    </div>
                    <div onClick={toggleController}>
                      <span className="cursor-pointer">Visa</span>
                    </div>
                    <div className="group cursor-pointer relative flex justify-end mb-6">
                      <div className="flex justify-center items-center gap-x-1">
                        <IoIosArrowDown size={12} />
                        <span className="cursor-pointer hover:border-b-[.5px] hover:border-teal_blue hover:text-teal_blue w-full">
                          Others
                        </span>
                      </div>
                      <div className="absolute -left-2 top-4 hidden group-hover:block mt-2 w-48 py-2 rounded-lg">
                        <div className="flex flex-col justify-end items-end pl-2 gap-y-2">
                          <span
                            onClick={() =>
                              openInNewTab("https://tripnest.net/about-us/")
                            }
                            className="cursor-pointer hover:text-teal_blue w-full flex"
                          >
                            <span className="pr-10" onClick={toggleController}>
                              About Us
                            </span>
                          </span>
                          <span
                            onClick={() =>
                              openInNewTab("https://tripnest.net/contact/")
                            }
                            className="cursor-pointer hover:text-teal_blue w-full flex"
                          >
                            <span className="pr-10" onClick={toggleController}>
                              Contact
                            </span>
                          </span>
                          <span
                            onClick={() =>
                              openInNewTab("https://tripnest.net/faqs/")
                            }
                            className="cursor-pointer hover:text-teal_blue w-full text-end mr-32"
                          >
                            <span onClick={toggleController}>Faq</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-20">
                      <Button
                        title="Logout"
                        handleClick={() => {}}
                        containerStyles="rounded-md px-14 py-2 bg-orange-deep text-white text-sm"
                      />
                      <div className="flex flex-col justify-center items-center gap-y-2">
                        <Button
                          title="Login"
                          handleClick={() => routerPush("/login")}
                          containerStyles="rounded-md px-14 py-2 bg-orange-deep text-white text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-8"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const navContainer =
  "fixed w-full h-[70px] top-0 left-0 bg-primary text-white z-[100] bg-orange-thin";
const logo = "flex items-center content-center gap-4";
const navItem = "hidden lg:flex items-center content-center gap-4";
const toggleBtn =
  "md:hidden flex items-center content-center gap-4 cursor-pointer";

export default Navbar2;
