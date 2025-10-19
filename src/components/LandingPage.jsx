 import React from 'react'

 export default function LandingPage() {
   return (
     <div className="min-h-screen bg-[#D9D9D9] flex flex-col items-center justify-center py-16 px-6">
      
       <div className="bg-[#D9D9D9] rounded-3xl shadow-lg w-full max-w-md flex flex-col justify-between p-10 space-y-16">
        
         <div className="space-y-10">
           <div className="flex justify-center">
             <h1 className="text-4xl font-bold text-black tracking-wide whitespace-nowrap">
               SHOPPING LIST
             </h1>
           </div>

           <div className="text-4xl space-y-6 px-3">
             <h2 className="text-lg font-semibold text-black/80 uppercase leading-relaxed">
               Classify your <br /> shopping easily
             </h2>
             <p className="text-sm text-black/70 leading-relaxed">
               Add, edit, and check your <br />
               shopping items from <br />
               anywhere.
             </p>
           </div>

           <div className="flex justify-center pt-6">
             <button className="bg-white text-black font-semibold px-16 py-4 rounded-full shadow-md hover:bg-gray-100 transition">
               Get Started
             </button>
           </div>
         </div>

         <div className="flex justify-evenly items-center gap-16 mt-12">
           <div className="flex flex-col items-center space-y-4">
             <div className="bg-white rounded-full p-6 sm:p-8 shadow-lg">
               <span className="text-3xl sm:text-4xl">➕</span>
             </div>
             <span className="text-sm sm:text-base font-medium text-black/80">
               Add Item
             </span>
           </div>

           <div className="flex flex-col items-center space-y-4">
             <div className="bg-white rounded-full p-6 sm:p-8 shadow-lg">
               <span className="text-3xl sm:text-4xl">🗑️</span>
             </div>
             <span className="text-sm sm:text-base font-medium text-black/80">
               Delete Item
             </span>
           </div>
         </div>
       </div>
     </div>
   );
 }
