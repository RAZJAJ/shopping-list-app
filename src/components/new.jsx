import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-gray-200 w-[320px] p-6 rounded-2xl shadow-md flex flex-col justify-between h-[520px] text-center">
        
        {/* Title and Info Section */}
        <div>
          <h1 className="font-bold text-lg mb-2 uppercase text-gray-800 ">
            SHOPPING LIST
          </h1>
          <h2 className="font-semibold text-sm mb-2 text-gray-700">
            CLASSIFY YOUR SHOPPING EASILY
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Add, edit, and check your shopping items from anywhere
          </p>

          <button
            className="bg-white text-gray-900 font-semibold px-5 py-2 rounded-full shadow hover:bg-gray-300 transition"
          >
            Get Started
          </button>
        </div>

        {/* Footer icons section */}
        <div className="flex justify-between items-center mt-6 text-gray-700">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-3 shadow mb-2">
              <span className="text-xl">➕</span>
            </div>
            <p className="text-xs font-semibold">Add Items</p>
          </div>

          <div className="flex flex-col items-center text-gray-400">
            <div className="bg-white rounded-full p-3 shadow mb-2">
              <span className="text-xl">🗑️</span>
            </div>
            <p className="text-xs font-semibold">Delete Item</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
