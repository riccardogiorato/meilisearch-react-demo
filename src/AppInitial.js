import React, { useState, useEffect } from "react";

// TODO configure the MeiliSearch Client 

function App() {
  const [searchedWord, setSearch] = useState("dumbell");
  const [resultSearch, setResults] = useState([]);
  const [resultCards, setCards] = useState([]);

  // TODO add function to send searchedWord to MeiliSearch when

  // TODO add function to parse the JSON object
  // of the resultSearch to resultCards components to display

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
        <div class="flex flex-wrap searchResults">{resultCards}</div>
      </div>
    </div>
  );
}

export default App;
