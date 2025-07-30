"use client";
import React, { useState } from "react";

const SearchAds = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // Placeholder: Replace with backend API call
    const dummyResponse = [
      { id: 1, title: "Ad for iPhone 15", description: "Latest model, sleek design." },
      { id: 2, title: "Ad for SRPackers", description: "Packers & movers, Bangalore." }
    ];
    setResults(dummyResponse.filter(ad => ad.title.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Search Ads</h2>

        <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type ad keyword..."
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
          />
          <button
            onClick={handleSearch}
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Search
          </button>
        </div>

        {/* 🖼️ Display Search Results */}
        <div className="grid gap-4">
          {results.map((item) => (
            <div key={item.id} className="p-4 bg-white rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchAds;
