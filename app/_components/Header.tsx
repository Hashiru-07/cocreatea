import React from 'react';
import Image from 'next/image'; 

function Header() {
  return (
    <header className="bg-custom-blue dark:bg-custom-blue opacity-61">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-300" href="#">
              <span className="sr-only">Home</span>
              <p className="text-white font-bold text-Bold  ml-10"><Image className="inline"
                src='/CoCreatea_1.png'
                alt='logo'
                width={60}
                height={60}>
               </Image>CoCreatea</p>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block  mr-10">
              <ul className="flex items-center gap-10 text-sm">
                <p className='text-white'></p>
                <li>
                  <a
                    className="text-white transition  text-custom-size hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition  text-custom-size hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition  text-custom-size hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4 mr-10">
              <div className="sm:flex sm:gap-4">
                <a
                  className="bg-custom-blue dark:bg-custom-blue opacity-61 px-10 py-2.5 text-sm font-bold text-custom-size text-white shadow dark:hover:bg-blue-500 border border-white rounded-full hover:border-blue-500"
                  href="#"
                >
                  Login
                </a>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
