import React from 'react';

export default function PatchNotes() {
  return (
    <div class='bg-gray-50 pt-12 sm:pt-16'>
      <div class='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div class='max-w-4xl mx-auto text-center'>
          <h2 class='text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10'>
            Perfection is an Iterative Process
          </h2>
          <p class='mt-3 text-xl leading-7 text-gray-500 sm:mt-4'>
            Science is always changing, and so are we. To maximize our
            transparency, we’ll always provide a description of the changes
            we’re making to our products. We’re currently on Patch 1.1.1.
          </p>
        </div>
      </div>
      <div class='mt-10 pb-12 bg-white sm:pb-16'>
        <div class='relative'>
          <div class='absolute inset-0 h-1/2 bg-gray-50'></div>
          <div class='relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div class='max-w-4xl mx-auto'>
              <div class='rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3'>
                <div class='border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r'>
                  <p class='text-5xl leading-none font-extrabold text-green-500'>
                    <a href='https://www.viteramen.com/patch-notes'>v1.0</a>
                  </p>
                  <p class='mt-2 text-lg leading-6 font-medium text-gray-500'>
                    The Original
                  </p>
                </div>
                <div class='border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r'>
                  <p class='text-5xl leading-none font-extrabold text-green-500'>
                    <a href='https://www.viteramen.com/patch-notes/vite-ramen-version-11-full-patch-notes'>
                      v1.1
                    </a>
                  </p>

                  <p class='mt-2 text-lg leading-6 font-medium text-gray-500'>
                    The New
                  </p>
                </div>
                <div class='border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l'>
                  <p class='text-5xl leading-none font-extrabold text-green-500'>
                    <a href='https://www.viteramen.com/patch-notes/vite-ramen-version-111-mini-patch-notes-noodle-improvements'>
                      v1.1.1
                    </a>
                  </p>
                  <p class='mt-2 text-lg leading-6 font-medium text-gray-500'>
                    The New and Improved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
