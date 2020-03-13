import React, { useRef } from 'react';

export default function FeatureSection({ refProp }) {
  return (
    <div ref={refProp} class='py-12 bg-white'>
      <div class='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div class='lg:text-center'>
          <p class='text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase'>
            Nutrition
          </p>
          <h3 class='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10'>
            Nutritionally Complete
          </h3>
          <p class='mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto'>
            You may not like it, but this is what peak performance looks like.
          </p>
        </div>

        <div className='flex'>
          <ul class='md:grid md:grid-cols-3 md:col-gap-8 md:row-gap-10'>
            <li></li>
            <li className='items-center sm:justify-center sm:flex'>
              <img src='https://images.squarespace-cdn.com/content/v1/5d94fef0e57130625924f223/1573095945342-MMJRTFPV5S43ZRO5DF45/ke17ZwdGBToddI8pDm48kLnfZvQ9iwxKU6eubAUQjId7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZu4EA4VkQXskbAiP4Lo2GV8HD7TW41NQmswmX4LjmCLoRwB-dUGsSquCnVTFQcaRg/protein%2Bvitamins.png?format=750w'></img>
              <img src='https://images.squarespace-cdn.com/content/v1/5d94fef0e57130625924f223/1573095954813-HEXKG05IG6HCKFBBFXOL/ke17ZwdGBToddI8pDm48kLnfZvQ9iwxKU6eubAUQjId7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZu4EA4VkQXskbAiP4Lo2GV8HD7TW41NQmswmX4LjmCLoRwB-dUGsSquCnVTFQcaRg/image-asset.png?format=750w'></img>
            </li>
            <li></li>
          </ul>
        </div>

        <div class='mt-10'>
          <ul class='md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10'>
            <li>
              <div class='flex'>
                <div class='flex-shrink-0'>
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
                        d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                      />
                    </svg>
                  </div>
                </div>
                <div class='ml-4'>
                  <h5 class='text-lg leading-6 font-medium text-gray-900'>
                    Balanced Macronutrients
                  </h5>
                  <p class='mt-2 text-base leading-6 text-gray-500'>
                    Need steady energy and strength? We’ve got you covered. Vite
                    Ramen has high protein, polyunsaturated fatty acids, and
                    fiber to balance out the carbs. Our macronutrients are
                    calculated so they fall well within The National Academy of
                    Medicine's recommended Acceptable Macronutrient Distribution
                    Ratios.
                  </p>
                </div>
              </div>
            </li>
            <li class='mt-10 md:mt-0'>
              <div class='flex'>
                <div class='flex-shrink-0'>
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
                        d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                      />
                    </svg>
                  </div>
                </div>
                <div class='ml-4'>
                  <h5 class='text-lg leading-6 font-medium text-gray-900'>
                    Bioavailable Nutrients
                  </h5>
                  <p class='mt-2 text-base leading-6 text-gray-500'>
                    Magnesium oxide and magnesium gluconate are both just
                    magnesium, right? Not at all. Magnesium oxide just doesn’t
                    absorb well into the body. We make sure that every nutrient
                    we have is bioavailable and doesn’t just look good on the
                    nutrition facts; it actually gets to work inside your body.
                  </p>
                </div>
              </div>
            </li>
            <li class='mt-10 md:mt-0'>
              <div class='flex'>
                <div class='flex-shrink-0'>
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
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                </div>
                <div class='ml-4'>
                  <h5 class='text-lg leading-6 font-medium text-gray-900'>
                    Complete Proteins
                  </h5>
                  <p class='mt-2 text-base leading-6 text-gray-500'>
                    Amino acids are the building blocks of protein, and just
                    like a puzzle, every piece needs to be there to be complete.
                    We pack a one-two punch with the complete proteins present
                    in quinoa as well as fortifying wheat with L-lysine, meaning
                    that your body will always have the ingredients it needs to
                    be strong and healthy.
                  </p>
                </div>
              </div>
            </li>
            <li class='mt-10 md:mt-0'>
              <div class='flex'>
                <div class='flex-shrink-0'>
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
                        d='M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20'
                      />
                    </svg>
                  </div>
                </div>
                <div class='ml-4'>
                  <h5 class='text-lg leading-6 font-medium text-gray-900'>
                    Less Sodium, Less Junk
                  </h5>
                  <p class='mt-2 text-base leading-6 text-gray-500'>
                    Vite Ramen is shelf stable because it uses cutting edge
                    microwave dehydration techniques, not because it has
                    artificial preservatives. We've lowered the sodium,
                    eliminated the preservatives and eliminated deep frying as
                    well. Feel good about eating instant ramen again!
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
