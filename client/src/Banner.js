import React from 'react';

export default function Banner() {
  return (
    <div class='relative bg-orange-500'>
      <div class='max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
        <div class='pr-16 sm:text-center sm:px-16'>
          <p class='font-medium text-sm text-white'>
            <span>OUR FIRST SPICY FLAVOR IS FINALLY HERE.</span>
            <span class='block sm:ml-2 sm:inline-block'>
              <a
                href='https://www.kickstarter.com/projects/vitekitchenstom/vite-ramen-x-fly-by-jing-a-complete-spicy-meal-in-3-minutes/'
                class='text-white font-bold underline'
              >
                Click here to go to our Kickstarter and GET SPICY! 🌶️
              </a>
            </span>
          </p>
        </div>
        <div class='absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start'>
          <button
            type='button'
            class='flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 transition ease-in-out duration-150'
          >
            <svg
              class='h-6 w-6 text-white'
              stroke='currentColor'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
