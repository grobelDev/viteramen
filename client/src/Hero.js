import React, { Fragment } from 'react';

// function HeroMain() {
//   return (
//     <Fragment>
//       <Hero></Hero>
//       <Hero3></Hero3>
//     </Fragment>
//   );
// }

export function Hero() {
  return (
    <div class='relative bg-white overflow-hidden'>
      <div class='hidden lg:block lg:absolute lg:inset-0'>
        <svg
          class='absolute top-0 left-1/2 transform translate-x-64 -translate-y-8'
          width='640'
          height='784'
          fill='none'
          viewBox='0 0 640 784'
        >
          <defs>
            <pattern
              id='svg-pattern-squares-desktop'
              x='118'
              y='0'
              width='20'
              height='20'
              patternUnits='userSpaceOnUse'
            >
              <rect
                x='0'
                y='0'
                width='4'
                height='4'
                class='text-gray-200'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            y='72'
            width='640'
            height='640'
            class='text-gray-100'
            fill='currentColor'
          />
          <rect
            x='118'
            width='404'
            height='784'
            fill='url(#svg-pattern-squares-desktop)'
          />
        </svg>
      </div>
      <div
        x-data='{ open: false }'
        class='relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32'
      >
        <div class='mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24'>
          <div class='lg:grid lg:grid-cols-12 lg:gap-8'>
            <div class='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
              <div class='text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base'>
                A NEW CHALLENGER
              </div>
              <h2 class='mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-5xl lg:text-5xl xl:text-5xl'>
                Psst. In the mood for something a little more...
                <br class='hidden md:inline' />
                <span class='text-red-600'> Spicy?</span>
              </h2>
              <p class='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                Our Sichuan Chili Edition is finally LIVE on Kickstarter!
              </p>
              <div class='mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0'>
                <p class='text-base font-medium text-gray-900'>
                  Be one of the first to GET SPICY!
                </p>
                <form
                  action='#'
                  method='POST'
                  class='mt-3 sm:flex justify-center lg:justify-start'
                >
                  {/* <input
                    aria-label='Email'
                    class='appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1'
                    placeholder='Enter your email'
                  /> */}
                  <div class='mt-3 rounded-md shadow sm:mt-0 sm:flex-shrink-0'>
                    <button class='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'>
                      <a href='https://www.kickstarter.com/projects/vitekitchenstom/vite-ramen-x-fly-by-jing-a-complete-spicy-meal-in-3-minutes'>
                        SHOP SPICY NOODS!
                      </a>
                    </button>
                  </div>
                  {/* <a
                    href='https://www.kickstarter.com/projects/vitekitchenstom/vite-ramen-x-fly-by-jing-a-complete-spicy-meal-in-3-minutes'
                    class='mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto'
                  >
                    SHOP SPICY NOODS!
                  </a> */}
                  {/* <button
                    type='submit'
                    class='mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 shadow-sm hover:bg-orange-600 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto'
                  >
                    SHOP SPICY NOODS!
                  </button> */}
                </form>
                {/* <p class='mt-3 text-sm leading-5 text-gray-500'>
                  We care about the protection of your data. Read our{' '}
                  <a href='#' class='font-medium text-gray-900 underline'>
                    Privacy Policy
                  </a>
                  .
                </p> */}
              </div>
            </div>
            <div class='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
              <svg
                class='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden'
                width='640'
                height='784'
                fill='none'
                viewBox='0 0 640 784'
              >
                <defs>
                  <pattern
                    id='svg-pattern-squares-mobile'
                    x='118'
                    y='0'
                    width='20'
                    height='20'
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x='0'
                      y='0'
                      width='4'
                      height='4'
                      class='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  y='72'
                  width='640'
                  height='640'
                  class='text-gray-100'
                  fill='currentColor'
                />
                <rect
                  x='118'
                  width='404'
                  height='784'
                  fill='url(#svg-pattern-squares-mobile)'
                />
              </svg>
              <div class='relative mx-auto w-full rounded-lg shadow-lg lg:max-w-lg'>
                <button class='relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline'>
                  <img
                    class='w-full'
                    src='https://ksr-ugc.imgix.net/assets/028/082/981/5d4d08b167b49fe3c5a1f60d1b4bff9c_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1581632439&auto=format&gif-q=50&q=92&s=d643f6453fb5d351a7000cbceb977150'
                    alt='Woman making a sale'
                  />

                  {/* <div class='absolute inset-0 w-full h-full flex items-center justify-center'>
                    <svg
                      class='h-20 w-20 text-indigo-500'
                      fill='currentColor'
                      viewBox='0 0 84 84'
                    >
                      <circle
                        opacity='0.9'
                        cx='42'
                        cy='42'
                        r='42'
                        fill='white'
                      />
                      <path d='M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z' />
                    </svg>
                  </div> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroV2() {
  return (
    <div class='relative bg-white overflow-hidden'>
      <div class='hidden lg:block lg:absolute lg:inset-0'>
        <svg
          class='absolute top-0 left-1/2 transform translate-x-64 -translate-y-8'
          width='640'
          height='784'
          fill='none'
          viewBox='0 0 640 784'
        >
          <defs>
            <pattern
              id='svg-pattern-squares-desktop'
              x='118'
              y='0'
              width='20'
              height='20'
              patternUnits='userSpaceOnUse'
            >
              <rect
                x='0'
                y='0'
                width='4'
                height='4'
                class='text-gray-200'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            y='72'
            width='640'
            height='640'
            class='text-gray-50'
            fill='currentColor'
          />
          <rect
            x='118'
            width='404'
            height='784'
            fill='url(#svg-pattern-squares-desktop)'
          />
        </svg>
      </div>
      <div
        x-data='{ open: false }'
        class='relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32'
      >
        <nav class='relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6'>
          <div class='flex items-center flex-1'>
            <div class='flex items-center justify-between w-full md:w-auto'>
              <a href='#'>
                <img
                  class='h-8 w-auto sm:h-10'
                  src='/img/logos/workflow-mark-on-white.svg'
                  alt=''
                />
              </a>
              <div class='-mr-2 flex items-center md:hidden'>
                <button
                  type='button'
                  class='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                >
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
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* <div class='hidden md:block md:ml-10'>
              <a
                href='#'
                class='font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
              >
                Product
              </a>
              <a
                href='#'
                class='ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
              >
                Features
              </a>
              <a
                href='#'
                class='ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
              >
                Marketplace
              </a>
              <a
                href='#'
                class='ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
              >
                Company
              </a>
            </div> */}
          </div>
          {/* <div class='hidden md:block text-right'>
            <span class='inline-flex rounded-md shadow-md'>
              <span class='inline-flex rounded-md shadow-xs'>
                <a
                  href='#'
                  class='inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
                >
                  Log in
                </a>
              </span>
            </span>
          </div> */}
        </nav>

        <div class='absolute top-0 inset-x-0 p-2 hidden md:hidden'>
          <div
            x-show='open'
            class='rounded-lg shadow-md transition transform origin-top-right'
          >
            <div class='rounded-lg bg-white shadow-xs overflow-hidden'>
              <div class='px-5 pt-4 flex items-center justify-between'>
                <div>
                  <img
                    class='h-8 w-auto'
                    src='/img/logos/workflow-mark-on-white.svg'
                    alt=''
                  />
                </div>
                <div class='-mr-2'>
                  <button
                    type='button'
                    class='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
                  >
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
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* <div class='px-2 pt-2 pb-3'>
                <a
                  href='#'
                  class='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                >
                  Product
                </a>
                <a
                  href='#'
                  class='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                >
                  Features
                </a>
                <a
                  href='#'
                  class='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                >
                  Marketplace
                </a>
                <a
                  href='#'
                  class='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out'
                >
                  Company
                </a>
              </div> */}
              {/* <div>
                <a
                  href='#'
                  class='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out'
                >
                  Log in
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div class='mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24'>
          <div class='lg:grid lg:grid-cols-12 lg:gap-8'>
            <div class='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
              <div class='text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base'>
                Coming soon
              </div>
              <h2 class='mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl'>
                Data to enrich your
                <br class='hidden md:inline' />
                <span class='text-indigo-600'>online business</span>
              </h2>
              <p class='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua ad ad non deserunt sunt.
              </p>
              <div class='mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0'>
                <p class='text-base font-medium text-gray-900'>
                  Sign up to get notified when it’s ready.
                </p>
                <form action='#' method='POST' class='mt-3 sm:flex'>
                  <input
                    aria-label='Email'
                    class='appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1'
                    placeholder='Enter your email'
                  />
                  <button
                    type='submit'
                    class='mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto'
                  >
                    Notify me
                  </button>
                </form>
                <p class='mt-3 text-sm leading-5 text-gray-500'>
                  We care about the protection of your data. Read our{' '}
                  <a href='#' class='font-medium text-gray-900 underline'>
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
            <div class='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
              <svg
                class='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden'
                width='640'
                height='784'
                fill='none'
                viewBox='0 0 640 784'
              >
                <defs>
                  <pattern
                    id='svg-pattern-squares-mobile'
                    x='118'
                    y='0'
                    width='20'
                    height='20'
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x='0'
                      y='0'
                      width='4'
                      height='4'
                      class='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  y='72'
                  width='640'
                  height='640'
                  class='text-gray-50'
                  fill='currentColor'
                />
                <rect
                  x='118'
                  width='404'
                  height='784'
                  fill='url(#svg-pattern-squares-mobile)'
                />
              </svg>
              <div class='relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md'>
                <button class='relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline'>
                  <img
                    class='w-full'
                    src='https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    alt='Woman making a sale'
                  />
                  <div class='absolute inset-0 w-full h-full flex items-center justify-center'>
                    <svg
                      class='h-20 w-20 text-indigo-500'
                      fill='currentColor'
                      viewBox='0 0 84 84'
                    >
                      <circle
                        opacity='0.9'
                        cx='42'
                        cy='42'
                        r='42'
                        fill='white'
                      />
                      <path d='M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z' />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero3({ scrollToRef, refProp }) {
  return (
    <div x-data='{ open: false }' class='relative bg-white overflow-hidden'>
      <div class='max-w-screen-xl mx-auto '>
        <div class='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <div class='pt-6 px-4 sm:px-6 lg:px-8'></div>

          <div
            x-show='open'
            class='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
          >
            <div class='rounded-lg shadow-md'></div>
          </div>

          <div class='mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
            <div class='sm:text-center lg:text-left'>
              <h2 class='text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl'>
                The Future of Food is
                <br class='xl:hidden' />
                <span class='text-green-400'> Nutritionally Complete.</span>
              </h2>
              <p class='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                The original convenient, ultra-nutritious meal designed from the
                ground up to help you perform at optimal levels every day.
              </p>
              <div class='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div class='rounded-md shadow'>
                  <a
                    href='https://shop.viteramen.com/'
                    class='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
                  >
                    Shop Now
                  </a>
                </div>
                <div class=''>
                  <div
                    class='mt-3 sm:mt-0 sm:ml-3'
                    onClick={() => scrollToRef(refProp)}
                  >
                    <div class='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'>
                      Nutrition Facts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            class='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
            fill='currentColor'
            viewBox='0 0 100 100'
            preserveAspectRatio='none'
          >
            <polygon points='50,0 100,0 50,100 0,100' />
          </svg>
        </div>
      </div>
      <div class='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          class='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
          src='https://images.squarespace-cdn.com/content/v1/5d94fef0e57130625924f223/1572899237606-5I37LNRJLSV3BH01DY2O/ke17ZwdGBToddI8pDm48kNkaafOyifyYd-vl3bwrQ38UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcsPR1n6WVHOcyUal1o_dQhMOjTLNHn0M6juLQnYA_u_-k6kwOh_pTnnAfFrYU_lgx/ViteRamenSmall-56%2BSplash.jpg'
          alt=''
        />
      </div>
    </div>
  );
}
