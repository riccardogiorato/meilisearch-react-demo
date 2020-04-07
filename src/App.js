import React, { useState, useEffect } from "react";

import MeiliSearch from "meilisearch";

const client = new MeiliSearch({
  host: "http://178.62.201.86:7700/",
  apiKey: "59c29bd271e4c0eac4edc054f35e02224cbe9665b59f2adb532c901e516a0d15",
});
const index = client.getIndex("decathlon");

function App() {
  const [searchedWord, setSearch] = useState("dumbell");
  const [resultSearch, setResults] = useState([]);
  const [resultCards, setCards] = useState([]);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function searchWithMeili() {
      const search = await index.search(searchedWord);
      setResults(search.hits);
    }
    // Execute the created function directly
    searchWithMeili();
  }, [searchedWord]);

  useEffect(() => {
    let arrayItems = [];
    for (let i = 0; i < resultSearch.length; i++) {
      const product = resultSearch[i];
      arrayItems.push(
        <div class="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-3">
          <a
            href={product.url}
            class="flex-1 rounded overflow-hidden shadow-lg"
          >
            <img
              class="w-full h-48 object-cover"
              src={product.images}
              alt={product.name}
              onError={(e)=>{e.target.onerror = null; e.target.src="/wide_logo.png"}}
            />
            <div class="px-6 py-3">
              <div class="font-bold text-sm mb-1 text-gray-600 capitalize">
                {product.category}
              </div>
              <div class="font-bold text-xl mb-2 text-gray-800">
                {product.vendor} - {product.name.substr(0, 20)}
              </div>
              <p class="text-black text-xl font-bold text-base py-2">
                $ {product.price}
              </p>
            </div>
          </a>
        </div>
      );
    }
    setCards(arrayItems);
  }, [resultSearch]);

  return (
    <div className="mx-auto">
      <div class="header font-sans text-white items-center justify-center">
        <header class="py-12">
          <img
            class="h-20 w-auto items-center justify-center p-2 mx-auto"
            src="/wide_logo.png"
            style={{ filter: "invert(0%)" }}
            alt=""
          />
          <h1 class="flex flex-wrap flex-grow text-3xl w-full justify-center p-4">
            Stop looking for an item — find it and work hard!
          </h1>
          <div class="border rounded overflow-hidden w-full flex justify-center mx-auto searchBox mt-6">
            <button class="flex items-center justify-center px-4 shadow-md bg-white text-black">
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
              value={searchedWord}
              onChange={(event) => setSearch(event.target.value)}
              class="px-6 py-4 w-full text-black"
              placeholder="Product, sport, color, …"
            />
          </div>
        </header>
      </div>

      <div>
        {/*<div class="filters mx-2 mt-2">
          <h3 class="text-xl text-black font-semibold justify-center px-2 py-4 inline-flex">
            Filters
          </h3>
          <div class="relative inline-flex">
            <svg
              class="w-3 h-3 absolute top-0 right-0 m-5 pointer-events-none mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fill-rule="nonzero"
              />
            </svg>
            <select class="p-6 pl-2 my-1 py-1 border border-gray-300 text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option>Choose a color</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Yellow</option>
              <option>Black</option>
              <option>Orange</option>
              <option>Purple</option>
              <option>Gray</option>
              <option>White</option>
            </select>
          </div>
          <button class="mx-2 bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-3 border border-black-500 hover:border-transparent rounded">
            Reset Filters
          </button>
  </div>*/}

        <div class="flex flex-wrap searchResults">{resultCards}</div>
      </div>
    </div>
  );
}

export default App;
