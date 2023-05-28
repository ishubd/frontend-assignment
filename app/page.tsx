import React from "react";
import Image from "next/image";
import axios from "axios";
import Header from "./components/Header";
import TrendingProducts from "./components/TrendingProducts";

export default function Index() {
  return (
    <>
      <Header />
      <div className="container mt-10">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <input
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-transparent"
              placeholder="Song, Artist, Album"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-[#fe958b] font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <h2 className="mt-10 text-4xl font-thin text-center">
          Trending Albums
        </h2>
        <div className="flex flex-wrap justify-between gap-9">
          <TrendingProducts />
          <TrendingProducts />
          <TrendingProducts />
          <TrendingProducts />
        </div>
      </div>
      <div className="bg-primary mt-10 text-white">
        <div className=" container p-5">
          <ul>
            <li className="inline">About Us</li>
            <li className="inline p-5">Contact Us</li>
            <li className="inline">Social Media</li>
          </ul>
        </div>
      </div>
    </>
  );
}
