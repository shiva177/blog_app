"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import demoImage from "@/public/img/demoimg.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [userData, setUserData] = useState({});
  const { data: session } = useSession();
  const pathname = usePathname();

  const [showMenu, setShowMenu] = useState(false);

  async function fetchUser() {
    try {
      const res = await fetch(
        `https://blogapp-platform.vercel.app//api/user/${session?.user?._id}`
      );
      const resData = await res.json();
      setUserData(resData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [session?.user?._id]);

  const handleToggleMenu = () => setShowMenu(!showMenu);
  const handleHideMenu = () => setShowMenu(false);

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="/">
          <h2 className="text-2xl font-bold cursor-pointer">
            Blog<span className="special-word">App.</span>
          </h2>
        </Link>

        <div className="md:hidden">
          {showMenu ? (
            <AiOutlineClose
              className="text-white text-2xl cursor-pointer"
              onClick={handleToggleMenu}
            />
          ) : (
            <AiOutlineMenu
              className="text-white text-2xl cursor-pointer"
              onClick={handleToggleMenu}
            />
          )}
        </div>

        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              href="/blog"
              className={`hover:text-purple-500 transition-all duration-300 ${
                pathname === "/blog" && "text-purple-500 font-bold"
              }`}
              onClick={handleHideMenu}
            >
              Blog
            </Link>
          </li>
          {session?.user ? (
            <>
              <li>
                <Link
                  href="/create-blog"
                  className={`hover:text-purple-500 transition-all duration-300 ${
                    pathname === "/create-blog" && "text-purple-500 font-bold"
                  }`}
                  onClick={handleHideMenu}
                >
                  Create
                </Link>
              </li>
              <li className="relative">
                <Image
                  onClick={handleToggleMenu}
                  src={userData?.avatar?.url || demoImage}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
                />
                {showMenu && (
                  <div className="absolute top-14 right-0 bg-primaryColorLight p-5">
                    <button
                      onClick={() => {
                        signOut();
                        handleHideMenu();
                      }}
                    >
                      Logout
                    </button>
                    <Link
                      onClick={handleHideMenu}
                      href={`/user/${session?.user?._id.toString()}`}
                    >
                      Profile
                    </Link>
                  </div>
                )}
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className={`hover:text-purple-500 transition-all duration-300 ${
                    pathname === "/login" && "text-purple-500 font-bold"
                  }`}
                  onClick={handleHideMenu}
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className={`hover:text-purple-500 transition-all duration-300 ${
                    pathname === "/signup" && "text-purple-500 font-bold"
                  }`}
                  onClick={handleHideMenu}
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {showMenu && (
        <div className="md:hidden bg-black text-white border-b space-y-2 border-gray-700 flex flex-col items-start  mt-4 px-6">
          <Link
            href="/blog"
            className={`hover:text-purple-500 transition-all duration-300 ${
              pathname === "/blog" && "text-purple-500 font-bold"
            }`}
            onClick={handleHideMenu}
          >
            ⚪Blog
          </Link>
          {session?.user ? (
            <>
              <Link
                href="/create-blog"
                className={`hover:text-purple-500 transition-all duration-300 ${
                  pathname === "/create-blog" && "text-purple-500 font-bold"
                }`}
                onClick={handleHideMenu}
              >
                ⚪Create
              </Link>
              <div className="relative flex  items-center space-x-4">
                
                {showMenu && (
                  <div className="flex flex-col top-14 right-0  space-y-2  ">
          
                    <Link
                      onClick={handleHideMenu}
                      href={`/user/${session?.user?._id.toString()}`}
                    >
                      ⚪Profile
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        handleHideMenu();
                      }}
                    >
                      {" "}
                      ⚪Logout
                    </button>
                  </div>
                )}
                <Image
                  onClick={handleToggleMenu}
                  src={userData?.avatar?.url || demoImage}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
                />
              </div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`hover:text-purple-500 transition-all duration-300 ${
                  pathname === "/login" && "text-purple-500 font-bold"
                }`}
                onClick={handleHideMenu}
              >
                ⚪LogIn
              </Link>
              <Link
                href="/signup"
                className={`hover:text-purple-500 transition-all duration-300 ${
                  pathname === "/signup" && "text-purple-500 font-bold"
                }`}
                onClick={handleHideMenu}
              >
                ⚪SignUp
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
