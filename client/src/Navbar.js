import React from 'react';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <StickyDiv className='z-50'>
      <nav className='top-0 bg-white border-b shadow'>
        <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div class='flex justify-between h-16'>
            <div class='flex'>
              <div class='flex-shrink-0 flex items-center'>
                <a href='/'>
                  <img
                    class='js lazyautosizes lazyloaded'
                    src='//cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_300x300.png?v=1538232151'
                    data-widths='[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]'
                    data-aspectratio='4.716981132075472'
                    data-sizes='auto'
                    alt='Vite Ramen'
                    data-srcset='//cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_180x.png?v=1538232151 180w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_360x.png?v=1538232151 360w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_540x.png?v=1538232151 540w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_720x.png?v=1538232151 720w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_900x.png?v=1538232151 900w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_1080x.png?v=1538232151 1080w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_1296x.png?v=1538232151 1296w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_1512x.png?v=1538232151 1512w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_1728x.png?v=1538232151 1728w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_2048x.png?v=1538232151 2048w'
                    sizes='165px'
                    srcset='//cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_180x.png?v=1538232151 180w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_360x.png?v=1538232151 360w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_540x.png?v=1538232151 540w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_720x.png?v=1538232151 720w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_900x.png?v=1538232151 900w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_1080x.png?v=1538232151 1080w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_1296x.png?v=1538232151 1296w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_1512x.png?v=1538232151 1512w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_1728x.png?v=1538232151 1728w, //cdn.shopify.com/s/files/1/0053/8928/7513/files/Horizontal-500_2048x.png?v=1538232151 2048w'
                  ></img>
                </a>
              </div>
              <div class='ml-6 flex'>
                <a
                  href='https://shop.viteramen.com/'
                  class='inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
                >
                  Shop
                </a>
                <a
                  href='https://www.viteramen.com/nutrition-folder'
                  class='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
                >
                  Nutrition
                </a>
                {/* <a
                  href='https://www.viteramen.com/about-us-1'
                  class='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
                >
                  About Us
                </a> */}
                {/* <a
                  href='/'
                  class='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
                >
                  Calendar
                </a> */}
              </div>
            </div>
            {/* <div class='hidden sm:ml-6 sm:flex sm:items-center'> */}
            {/* Put icons here to go on the right side */}
            {/* <button class='p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out'>
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
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </button> */}
            {/* <div class='ml-3 relative' x-data='{ open: false }'>
                <div>
                  <button class='flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out'>
                    <img
                      class='h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </button>
                </div>
              </div> */}
            {/* </div> */}
            {/* <div class='-mr-2 flex items-center sm:hidden'>
              <button class='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'>
                <svg
                  class='h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    class='inline-flex'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                  <path
                    class='hidden'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
        <div class='hidden sm:hidden'>
          <div class='pt-2 pb-3'>
            <a
              href='/'
              class='block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out'
            >
              Dashboard
            </a>
            <a
              href='/'
              class='mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'
            >
              Team
            </a>
            <a
              href='/'
              class='mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'
            >
              Projects
            </a>
            <a
              href='/'
              class='mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out'
            >
              Calendar
            </a>
          </div>
          {/* <div class='pt-4 pb-3 border-t border-gray-200'>
            <div class='flex items-center px-4'>
              <div class='flex-shrink-0'>
                <img
                  class='h-10 w-10 rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
              </div>
              <div class='ml-3'>
                <div class='text-base font-medium leading-6 text-gray-800'>
                  Tom Cook
                </div>
                <div class='text-sm font-medium leading-5 text-gray-500'>
                  tom@example.com
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </nav>
    </StickyDiv>
  );
}

const StickyDiv = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0; /* required */
`;
