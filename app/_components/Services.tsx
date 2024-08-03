'use client';
import React from 'react';

function Services() {
  return (
    <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 flex-shrink-0 w-80 mt-5 flex flex-col items-center">
      {/* Icon Section */}
      <span className="inline-flex items-center justify-center rounded bg-blue-600 p-2 text-white mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      </span>

      {/* Content Section */}
      <a href="#">
        <h3 className="text-lg font-medium text-gray-900 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
        animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
        itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>
    </article>
  );
}


function BlogSlider() {
    const scrollContainerRef = React.useRef(null);
  
    return (
      <div className="relative w-full overflow-hidden p-4">
        {/* Title Section */}
        <div className="text-center mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            The service we offer is specifically designed to meet your needs.
          </h2>
        </div>
  
        {/* Slider Section */}
        <div
          ref={scrollContainerRef}
          className="flex justify-center overflow-x-auto scrollbar-hide space-x-4"
        >
          <div className="flex flex-shrink-0 space-x-4">
            <Services />
            <Services />
            <Services />
            {/* Add more <Services /> components as needed */}
          </div>
        </div>
      </div>
    );
  }
  
  export default BlogSlider;
    