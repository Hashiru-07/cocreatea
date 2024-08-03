"use client";

import React, { useState } from 'react';
import Image from 'next/image';

function About() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <section className="relative bg-violet-950 bg-cover bg-center bg-no-repeat">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="hidden lg:block lg:ml-20 mb-40 lg:flex-shrink-0">
          <Image
            src='/images/Collab-rafiki.png'
            alt='logo'
            width={500}
            height={500}
          />
        </div>
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right mb-20">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            <span className="text-blue-400">Co</span>llaborate, <span className="text-blue-400">Create</span>, and
            <strong className="block font-extrabold text-white">
              <span className="text-blue-400">A</span>chieve
            </strong>
          </h1>
          <div className="mt-4 flex flex-col items-center gap-4">
            {/* Dropdown 1 */}
            <button
              onClick={() => handleDropdownToggle('dropdown1')}
              className="relative inline-flex items-center px-4 py-2 text-white bg-blue-400 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="mr-8">What is CoCreatea?</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            {openDropdown === 'dropdown1' && (
              <div className="mt-2 overflow-hidden max-h-40 transition-all duration-500 ease-in-out">
                <p className="text-white">
                  CoCreatea is a diagramming application designed to improve team collaboration and decision-making. It offers a range of features to streamline project management and enhance productivity.
                </p>
              </div>
            )}

            {/* Dropdown 2 */}
            <button
              onClick={() => handleDropdownToggle('dropdown2')}
              className="relative inline-flex items-center px-4 py-2 text-white bg-blue-400 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="mr-8">Benefits</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            {openDropdown === 'dropdown2' && (
              <div className="mt-2 overflow-hidden max-h-40 transition-all duration-500 ease-in-out">
                <p className="text-white">
                  Using CoCreatea provides several benefits including enhanced collaboration, streamlined workflows, and improved decision-making. It helps teams work together more efficiently and effectively.
                </p>
              </div>
            )}

            {/* Dropdown 3 */}
            <button
              onClick={() => handleDropdownToggle('dropdown3')}
              className="relative inline-flex items-center px-4 py-2 text-white bg-blue-400 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="mr-8">Hardware Requirements</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            {openDropdown === 'dropdown3' && (
              <div className="mt-2 overflow-hidden max-h-40 transition-all duration-500 ease-in-out">
                <p className="text-white">
                  To use CoCreatea, your hardware needs to meet the minimum system requirements. This typically includes a modern processor, sufficient RAM, and a stable internet connection for optimal performance.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
