import React from 'react';
import Image from 'next/image'; 
import { Container } from 'postcss';

function Learn() {
  return (
    <section className="relative bg-gradient-to-r from-[#58BBF2] to-[#5865F2] bg-cover bg-center bg-no-repeat">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right mb-20">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <strong className="block font-extrabold text-blue-900 text-left"> Learn about UML. </strong>
          </h1>
          <p className="mt-4 max-w-lg text-white sm:text-sm/relaxed text-left">
          UML stands for Unified Modeling Language. It’s a rich language to model software solutions, application structures, system behavior and business processes. There are 14 UML diagram types to help you model these behaviors.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded-full bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-white-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="hidden lg:block lg:ml-20 mb-40 lg:flex-shrink-0">
        <Image
                src='/Collab-pana.png'
                alt='logo'
                width={570}
                height={570}>
               </Image>
        </div>
      </div>
    </section>
  );
}

export default Learn;
