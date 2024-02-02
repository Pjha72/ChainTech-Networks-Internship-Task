import React, { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <div className="max-w-6xl mx-auto pt-4 space-y-6 ">
        <h1 className="text-3xl text-center font-bold">Welcome To Our Page</h1>
        <div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
          <button class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">
            Click On Sign In To Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
