import React from "react";

function Statistics() {
  return (
    <div>
      <section class="bg-green-700 dark:bg-gray-900"> 
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-10 lg:px-6">
          <dl class="grid max-w-screen-md gap-8 mx-auto text-white sm:grid-cols-3 dark:text-black">
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">29</dt>
              <dd class="font-light text-white">
                States
              </dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">400+</dt>
              <dd class="font-light text-white">
                Cities
              </dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-3xl md:text-4xl font-extrabold">5K+</dt>
              <dd class="font-light text-white">
                Centers
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}

export default Statistics;
