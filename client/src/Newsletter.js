import React from 'react';

export default function Newsletter() {
  return (
    <div class='bg-gray-100'>
      <div class='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <h2 class='text-3xl leading-9 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
          Want product news and updates? <br class='hidden sm:inline' />
          <span class=''>Sign up for our newsletter.</span>
        </h2>
        <form class='mt-8 sm:flex'>
          <input
            aria-label='Email address'
            type='email'
            required
            class='appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs'
            placeholder='Enter your email'
          />
          <div class='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
            <button class='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'>
              Notify me
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
