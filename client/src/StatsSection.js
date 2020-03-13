import React from 'react';

export default function StatsSection() {
  return (
    <div class='relative bg-white'>
      <div class='h-56 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2 '>
        <img
          class='h-full w-full object-cover'
          src='https://cdn.shopify.com/s/files/1/0053/8928/7513/files/barbell-bodybuilder-bodybuilding-841131long.jpg?v=1572594132'
          alt='Support team'
        />
      </div>
      <div class='relative max-w-screen-xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16'>
        <div class='max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10'>
          <div>
            <div class='flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
              <svg
                class='h-6 w-6'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M13 7H21M21 7V15M21 7L13 15L9 11L3 17'
                />
              </svg>
            </div>
          </div>
          <h2 class='mt-6 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10'>
            30g of Complete Protein Per Packet
          </h2>
          <p class='mt-6 text-lg leading-7 text-gray-500'>
            When we said high protein, we mean high protein. Vite Ramen has more
            protein than a 4oz ribeye steak, and comes with complete amino acid
            profiles.
          </p>
          <div class='mt-8 overflow-hidden'>
            <div class='-mx-8 -mt-8 flex flex-wrap'>
              <div class='px-8 pt-8'>
                <p class='text-2xl leading-8 font-extrabold text-indigo-600 sm:text-3xl sm:leading-9'>
                  65% DV
                </p>
                <p class='text-base leading-6 font-medium text-gray-500'>
                  Protein
                </p>
              </div>
              <div class='px-8 pt-8'>
                <p class='text-2xl leading-8 font-extrabold text-indigo-600 sm:text-3xl sm:leading-9'>
                  25% DV
                </p>
                <p class='text-base leading-6 font-medium text-gray-500'>
                  Vitamins
                </p>
              </div>
              <div class='px-8 pt-8'>
                <p class='text-2xl leading-8 font-extrabold text-indigo-600 sm:text-3xl sm:leading-9'>
                  25% DV
                </p>
                <p class='text-base leading-6 font-medium text-gray-500'>
                  Minerals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
