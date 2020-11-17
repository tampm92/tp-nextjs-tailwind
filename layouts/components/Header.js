import React from "react"
import Link from "next/link"

import TpLogo from '@/assets/svg/TpLogo.svg'

export default function Header(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="flex text-nuxt-gray h-7 lg:h-10 z-10 mr-auto"
                href="#"
              >
                <TpLogo className="h-6 lg:h-8 transition-colors duration-300 ease-linear" />
                <span className="text-xl lg:text-2xl font-medium leading-none pl-2 inline-flex justify-center items-center text-green-500">Tam Phan</span>
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                  href="https://tampm.com/"
                  target="_blank"
                >
                  <i className="text-gray-500 fas fa-globe text-lg leading-lg mr-2" />{" "}
                  TP Website
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="bg-green-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  href="https://github.com/tampm92/tp-nextjs-tailwind"
                  target="_blank"
                >
                  <i className="text-white fab fa-github text-lg leading-lg" /> Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
