import React, { useState } from "react";
import { BadgeCheck, CircleEllipsis, Ban, SlidersHorizontal, Plus, Search } from "lucide-react";

function Billings() {
  

  return (
  

    
    <div className="flex flex-col px-6   items-center mt-12 bg-blue-50 w-full min-h-screen">
      
      

<div className="w-full pl-8 flex flex-col justify-between mt-8 mb-1">
  <h1 className="text-3xl font-bold">Billing</h1>
  <p className="my-2">Short description will be placed here</p>
</div>

<div className="flex flex-wrap md:flex-nowrap md:space-x-4 mt-4 max-w-[90%] mx-auto text-lg text-white mb-1 justify-center ">

  {[
    { color: "bg-[#FFDE59]", icon: <BadgeCheck className="w-4 h-4 font-bold text-white" />, title: "Draft" },
    { color: "bg-[#71C1E8]", icon: <CircleEllipsis className="w-5 h-5 text-white" />, title: "Unpaid" },
    { color: "bg-[#FFA0A3]", icon: <Ban className="w-4 h-4 text-white" />, title: "Overdue" },
    { color: "bg-[#01B574C4]", icon: <BadgeCheck className="w-4 h-4 text-white" />, title: "Paid" },
  ].map(({ color, icon, title }, index) => (
    <div key={index} className={`flex flex-col ${color} rounded-lg border 
      flex-1 min-w-[180px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[250px] 
      h-[80px] md:h-[120px] lg:h-[120px] 
      md:px-4 px-2 justify-center mb-6  transition-transform duration-300 hover:scale-105 `}>
      
      <div className="flex items-center font-bold text-2xl space-x-4">
        {icon}
        <h2 className="text-white">{title}</h2>
      </div>
      
      <div className="flex mt-4 pl-4 text-white text-sm space-x-10">
        <p className="text-white">Pies:120</p>
        <p className="text-white">Value:$1200</p>
      </div>
    </div>
  ))}
</div>





<div className="bg-white p-4 w-full items-center h-full mt-3 rounded-lg shadow-md">
  {/* Navigation Tabs and Icons Container */}
  <div className="flex justify-between items-center border-b pb-2 text-sm text-gray-500">
    {/* Navigation Tabs */}
    <div className="flex space-x-6">
      {["Proforma", "Issued", "Received", "Partners", "Warehouse"].map((tab, index) => (
        <span 
          key={index} 
          className={`cursor-pointer ${tab === "Issued" ? "text-blue-500 border-b-2 border-blue-500" : ""}`}
        >
          {tab}
        </span>
      ))}
    </div>

    {/* Icons on the Right */}
    <div className="flex items-center space-x-7 text-gray-600">
      <Plus />
      <Search />
      <SlidersHorizontal />
    </div>
  </div>



  {/* Table Section */}
  <div className="overflow-x-auto mt-4">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b bg-gray-100 text-left">
          {["Invoice", "Date", "Due Date", "Partner", "Amount", "VAT", "Status"].map((header) => (
            <th key={header} className="px-4 py-2 text-gray-600">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(6)].map((_, index) => (
          <tr key={index} className="border-b">
            <td className="px-4 text-sm py-2">2025-01</td>
            <td className="px-4 text-sm py-2">July 14, 2015</td>
            <td className="px-4 text-sm py-2">July 14, 2015</td>
            <td className="px-4 text-sm py-2">ZVEZOA.Doc</td>
            <td className="px-4 text-sm py-2">$103</td>
            <td className="px-4  text-sm py-2">244</td>
            <td className="px-4 text-sm py-2">
              {index % 2 === 0 ? (
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm">Paid</span>
              ) : (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm">Un Paid</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Action Buttons */}
  
</div>

</div>

  );
}

export default Billings;
