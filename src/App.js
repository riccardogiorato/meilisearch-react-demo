import React from "react";

function App() {
  return (
    <div className="mx-auto">
      <div class="header font-sans text-white bg-cover items-center justify-center">
        <header class="py-12">
          <img
            class="h-16 w-auto items-center justify-center p-4 mx-auto"
            src="https://www.meilisearch.com/_nuxt/img/c909a8c.svg"
            style={{ filter: "invert(100%)" }}
          />
          <h1 class="flex flex-wrap flex-grow text-3xl w-full justify-center p-4">
            Stop looking for an item — find it.
          </h1>
          <div class="border rounded overflow-hidden w-full flex justify-center mx-auto searchBox">
            <button class="flex items-center justify-center px-4 shadow bg-white text-black">
              <svg
                class="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
            <input
              type="text"
              class="px-6 py-2 w-full text-black"
              placeholder="Product, sport, color, …"
            />
          </div>
        </header>
        <div class="flex flex-wrap searchResults">
          <div class="w-full sm:w-1/2 md:w-1/3 p-3">
            <div class="rounded overflow-hidden shadow-lg">
              <img
                class="w-full h-48 object-cover"
                src="https://tailwindcss.com/img/jonathan.jpg"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-3">
                <div class="font-bold text-xl mb-2 text-gray-800">The Coldest Sunset</div>
                <p class="text-gray-700 text-sm text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque.
                </p>
                <p class="text-black text-xl font-bold text-base py-2">
                $ 39,99
                </p>
 
              <div class="py-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 my-1 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 my-1 py-1 text-sm font-semibold text-gray-700 mr-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 my-1 py-1 text-sm font-semibold text-gray-700">
                  #winter
                </span>
              </div>
              </div>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 px-3">
            <div class="bg-gray-400 h-20"></div>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/3 px-3">
            <div class="bg-gray-400 h-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
