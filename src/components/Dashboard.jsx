import React from "react";

import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { useState } from "react";
import {  ChevronDown,  BadgeCheck, CircleEllipsis, Ban, Circle, UtensilsCrossed, CalendarCheck, Clock, } from "lucide-react";
import Calendar from "react-calendar";
import vector from "/src/assets/vector.png";
import pfp from "/src/assets/pfp.png";
import "react-calendar/dist/Calendar.css";
import ppp from "/src/assets/ppp.png";


function Dashboard() {


  
  




  const [events, setEvents] = useState([
    { title: "Meeting", date: "2025-01-08", color: "#ff5a27" },
    { title: "Wedding", date: "2025-01-10", color: "#6b46c1" },
    { title: "Rent", date: "2025-01-16", color: "#805ad5" },
    { title: "Meeting", date: "2025-01-05", color: "#3182ce" },
    { title: "Photo Booth", date: "2025-01-25", color: "#e53e3e" },
    { title: "UFC", date: "2025-01-29", color: "#2b6cb0" },
  ]);

  const handleDateClick = (arg) => {
    const title = prompt("Enter event title:");
    if (title) {
      setEvents([...events, { title, date: arg.dateStr, color: "#ff5a27" }]);
    }
  };

  const [date, setDate] = useState(new Date());
  const dataa = [
    { name: "Mar", value: 8000 },
    { name: "Apr", value: 9000 },
    { name: "May", value: 10000 },
    { name: "Jun", value: 12000 },
    { name: "Jul", value: 15000 }, // Highlighted
    { name: "Aug", value: 11000 },
    { name: "Sep", value: 9500 },
    { name: "Oct", value: 10500 },
    { name: "Nov", value: 9800 },
    { name: "Dec", value: 12500 },
    { name: "Jan", value: 13000 },
    { name: "Feb", value: 10200 },
  ];
  


  const data = [
    
    { name: "Paid", value: 140, color: "#C1FCF7" },
    { name: "Unpaid", value: 210, color: "#EE5528" },
    { name: "Overdue", value: 86, color: "#C8D6E0" },
   
  ];

  return (
    <div className="flex min-h-screen w-full bg-blue-50">

<section id="dashboard" className="w-4/5 px-2 inline-block pt-4  items-center justify-center">
<div className="flex relative  gap-0 md:space-x-1 max-w-3xl mt-16 text-lg   pl-2 pr-2 text-white mb-1 ">
      <div className="flex transition-transform duration-300 hover:scale-105 flex-col bg-[#71C1E8] rounded-lg border w-[500px] h-[120px] py-1 px-4 justify-center">
      <div className="flex justify-between items-center w-full">
  <h2 className="text-white font-bold text-xl">Cancel</h2>
  <BadgeCheck className="w-4 h-4 text-white" />
</div>
  <p className="mt-2 text-white">2</p>
</div>
<div className="flex flex-col transition-transform duration-300 hover:scale-105 bg-[#FFDE59] rounded-lg border w-[500px] h-[120px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex justify-between items-center w-full ">
    <h2 className="text-white font-bold text-xl">Pending</h2>
    <CircleEllipsis className="w-5 h-5 text-white" />
  </div>
  <p className="mt-2 text-white">2</p>
</div>
<div className="flex flex-col transition-transform duration-300 hover:scale-105 bg-[#FFA0A3] rounded-lg border w-[500px] h-[120px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex justify-between items-center w-full ">
    <h2 className="text-white font-bold text-xl">Cancel</h2>
    <Ban className="w-4 h-4 text-white" />
  </div>
  <p className="mt-2 text-white">2</p>
</div>
<div className="flex flex-col transition-transform duration-300 hover:scale-105 bg-[#01B574C4] rounded-lg border w-[500px] h-[120px] md:p-4 p-4 justify-center md:mt-0 mt-4">
  <div className="flex justify-between items-center w-full ">
    <h2 className="text-white font-bold text-xl">Done</h2>
    <BadgeCheck className="w-4 h-4 text-white" />
  </div>
  <p className="mt-2 text-white">2</p>
</div>



  





      </div>

      <div className="flex justify-end max-w-3xl pr-[15px]">
  <button className="px-4 py-1 bg-[#3AC593] border text-xs  text-white flex items-center gap-1 rounded-sm">
    Jan 2024  
    <ChevronDown className="w-3 h-3 text-white" />
  </button>
</div>


      <div className="md:flex md:space-x-4 justify-center max-w-3xl  py-1 pl-2 pr-2 mb-0">
        {/* box 1 */}
      <div className="flex flex-col bg-white rounded-lg border  w-[400px] h-auto shadow-md md:px-4 px-2">
     <div className="flex justify-between mb-2 w-full">
  <h2 className="font-bold  mt-4 text-xl">Event Statistics</h2>
  <p className="text-gray-500 mt-6 text-sm">Top 5</p>
</div>

  {/* Table */}
<div className="mt-0 px-2">
  <table className="w-full text-sm border-separate border-spacing-y-1">
    <thead>
      <tr className="text-gray-400 font-semibold text-xs ">
        <th className="text-left">Events</th>
        <th className="text-center">Numbers</th>
        <th className="text-right">Money</th>
      </tr>
    </thead>
    <tbody className="text-gray-500 text-xs">
      <tr className="border-b text-black border-gray-300">
        <td>Rent</td>
        <td className="text-center">7</td>
        <td className="text-right">€14,000</td>
      </tr>
      <tr className="border-b text-black border-gray-300">
        <td>Wedding</td>
        <td className="text-center">2</td>
        <td className="text-right">€34,000</td>
      </tr>
      <tr className="border-b text-black border-gray-300">
        <td>Club</td>
        <td className="text-center">3</td>
        <td className="text-right">€4,000</td>
      </tr>
      <tr className="border-b text-black border-gray-300">
        <td>Private</td>
        <td className="text-center">1</td>
        <td className="text-right">€1,000</td>
      </tr>
      <tr className="border-b text-black border-gray-300">
        <td>Private</td>
        <td className="text-center">1</td>
        <td className="text-right">€1,000</td>
      </tr>
    </tbody>
    <tfoot>
      <tr className="font-bold border-t border-gray-300">
        <td>Total</td>
        <td className="text-center">13</td>
        <td className="text-right text-gray-500">€104,000</td>
      </tr>
    </tfoot>
  </table>
</div>
</div>
  
 {/* box 2 */}
        <div className="flex flex-col rounded-lg border  w-[400px] h-[240px] md:p-4 p-2 md:mt-0 mt-2 bg-white shadow-lg">
    <div className="flex justify-between mb-2 w-full">
  <h2 className="font-bold   text-xl">Monthly Revenue</h2>
  <p className="text-gray-500  text-sm">Top 5</p>
</div>

      <ResponsiveContainer width="100%" height={180}>
  <BarChart data={dataa} barSize={12}>
    {/* X-Axis with all months displayed in extra small text */}
    <XAxis
      dataKey="name"
      axisLine={false} // Removes black line
      tickLine={false}
      interval={0} // Show all months
      padding={{ left: 2, right: 2 }}
      tick={{ fontSize: 8 }} // Extra small text for months
    />
    <YAxis hide />
    <Tooltip />

    {/* Bars: Gray for all, Blue for July */}
    <Bar
      dataKey="value"
      radius={10}
      shape={(props) => {
        const { x, y, width, height, payload } = props;
        return (
          <g>
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              fill={payload.name === "Jul" ? "#2563EB" : "#CBD5E1"}
              rx={10} // Rounded corners
            />
            {/* Display "$15,000" above July */}
            {payload.name === "Jul" && (
              <text
                x={x + width / 2}
                y={y - 5} // Position above the bar
                textAnchor="middle"
                fontSize="10"
                fontWeight="bold"
                fill="black"
              >
                $15,000
              </text>
            )}
          </g>
        );
      }}
    />
  </BarChart>
</ResponsiveContainer>
  </div>
 </div>


      
      <div className="md:flex md:space-x-4 pl-2 pr-2  max-w-3xl justify-center py-2 mt-1">
        
 {/* box 3 */}

     
      <div className="flex bg-white flex-col rounded-lg border  w-[400px] h-auto shadow-md md:px-4 px-2">
      <div className="flex justify-between mb-2  w-full">
  <h2 className="font-bold  mt-4 text-xl">Partners</h2>
  <p className="text-gray-500  mt-6 text-sm">Top 5</p>
</div>
  {/* Table */}
<div className="mt-0 px-2">
  <table className="w-full text-sm border-separate border-spacing-y-2">
    <thead>
      <tr className="text-gray-400 font-semibold text-xs ">
        <th className="text-left">Names</th>
        <th className="text-center">Gigs</th>
        <th className="text-right">Money</th>
      </tr>
    </thead>
    <tbody className="text-black text-xs">
      <tr className="border-b border-gray-300">

        <td className="flex"><img src={ppp} alt="User" className="w-5 h-5 rounded-full" />Steve</td>
        <td className="text-center">7</td>
        <td className="text-right">€14,000</td>
      </tr>
      <tr className="border-b border-gray-300">
       <td className="flex"><img src={ppp} alt="User" className="w-5 h-5 rounded-full" />Steve</td>
        <td className="text-center">2</td>
        <td className="text-right">€3,000</td>
      </tr>
      <tr className="border-b border-gray-300">
       <td className="flex"><img src={ppp} alt="User" className="w-5 h-5 rounded-full" />Steve</td>
        <td className="text-center">3</td>
        <td className="text-right">€32,000</td>
      </tr>
      <tr className="border-b border-gray-300">
       <td className="flex"><img src={ppp} alt="User" className="w-5 h-5 rounded-full" />Steve</td>
        <td className="text-center">1</td>
        <td className="text-right">€32,000</td>
      </tr>
      <tr className="border-b border-gray-300">
       <td className="flex"><img src={ppp} alt="User" className="w-5 h-5 rounded-full" />Steve</td>
        <td className="text-center">1</td>
        <td className="text-right">€32,000</td>
      </tr>
    </tbody>
    
  </table>
</div>
</div>
 {/* box 4 */}
        <div className="flex flex-col rounded-lg border  w-[400px] h-[240px] md:p-2 p-2 md:mt-0 mt-0 bg-white shadow-lg">
      <div className="flex justify-between mb-2 px-1 w-full">
  <h2 className="font-bold mt-2  text-xl">Issued Invoices</h2>
  <p className="text-gray-500 mt-3 text-sm">Top 5</p>
</div>
      {/* Chart */}
      <div className="flex mt-0 justify-center">
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={70}
            paddingAngle={0} // Removed space between slices
            dataKey="value"
            shadow="70%"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* Legend (Inline) */}
      <div className="flex justify-center text-gray-500  space-x-2 mt-3 font-semibold text-xs px-1 ">
     
        <span className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-1"></span>Unpaid 210</span>
        <span className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-1"></span>Paid 140 </span>
        <span className="flex items-center"><span className="w-2 h-2 bg-gray-500 rounded-full mr-1"></span> Overdue 86</span>
        <span className="flex items-center"><span className="w-2 h-2 bg-gray-900 rounded-full mr-1"></span>Total 402</span>
      </div>
    </div>
   

      </div>
      </section>


    
   
      <section id="calendar" className="w-full inline-block pt-11 items-start justify-start">
      <div className=" border bg-white shadow-md   rounded-lg  h-auto md:p-2 p-2  mt-9 ">
      {/* Calendar Section */}
      <div className="mb-4  mt-3 px-4">
        
        
        {/* Real Calendar */}
        <Calendar
          onChange={setDate}
          value={date}
          className="border-none w-full text-black text-sm"
        />
      </div>
 {/* Upcoming Events Section */}
 <h3 className="text-md text-black pl-6 mt-4 mb-6 font-bold">Upcoming Events</h3>
  <div className="mt-2 space-y-6">
    {/* Event 1 */}
    <div className="bg-lime-200 rounded-md p-3 flex items-center justify-between w-full">
  {/* Left Section - Icon and Event Details */}
  <div className="flex items-center gap-3">
    {/* Circular Icon */}
    <div className="w-6 h-6 bg-white flex items-center justify-center rounded-full">
      <img src={vector} alt="Icon" className="text-green-800 w-6 h-6" />
    </div>

    {/* Event Details */}
    <div>
      <span className="text-sm font-semibold text-black mb-2 block">Team Outing</span>
      <div className="flex items-center gap-2 text-gray-600 text-xs">
        <span className="flex"> <CalendarCheck className="w-4 h-4 mt-0 pr-1"/> Jan 2024</span>
        <span className="flex"><Clock className="w-4 h-4 mt-0 pr-1"/> 08:00 AM - 09:30</span>
      </div>
    </div>
  </div>

  {/* Right Section - Overlapping Avatars */}
  <div className="relative flex -space-x-3">
    <img src={pfp} alt="User" className="w-6 h-6 rounded-full border border-white" />
    <img src={pfp} alt="User" className="w-6 h-6 rounded-full border border-white" />
    <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-xs text-white border border-white">+8</div>
  </div>
</div>


    {/* Event 2 */}
    <div className="bg-blue-200 rounded-md p-3 flex items-center justify-between w-full">
  {/* Left Section - Icon and Event Details */}
  <div className="flex items-center gap-3">
    {/* Circular Icon */}
    <div className="w-6 h-6 bg-white flex items-center justify-center rounded-full">
      <img src={vector} alt="Icon" className="text-green-800 w-6 h-6" />
    </div>

    {/* Event Details */}
    <div>
      <span className="text-sm font-semibold text-black mb-2 block">Team Outing</span>
      <div className="flex items-center gap-2 text-gray-600 text-xs">
        <span className="flex"> <CalendarCheck className="w-4 h-4 mt-0 pr-1"/> Jan 2024</span>
        <span className="flex"><Clock className="w-4 h-4 mt-0 pr-1"/> 08:00 AM - 09:30</span>
      </div>
    </div>
  </div>

  {/* Right Section - Overlapping Avatars */}
  <div className="relative flex -space-x-3">
    <img src={pfp} alt="User" className="w-6 h-6 rounded-full border border-white" />
    <img src={pfp} alt="User" className="w-6 h-6 rounded-full border border-white" />
    <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-xs text-white border border-white">+8</div>
  </div>
</div>

    {/* Event 3 */}
    <div className="bg-red-100 rounded-md p-3 flex items-center justify-between w-full">
  {/* Left Section - Icon and Event Details */}
  <div className="flex items-center gap-3">
    {/* Circular Icon */}
    <div className="w-6 h-6 bg-white flex items-center justify-center rounded-full">
      <img src={vector} alt="Icon" className="text-green-800 w-6 h-6" />
    </div>

    {/* Event Details */}
    <div>
      <span className="text-sm font-semibold text-black mb-2 block">Team Outing</span>
      <div className="flex items-center gap-2 text-gray-600 text-xs">
        <span className="flex"> <CalendarCheck className="w-4 h-4 mt-0 pr-1"/> Jan 2024</span>
        <span className="flex"><Clock className="w-4 h-4 mt-0 pr-1"/> 08:00 AM - 09:30</span>
      </div>
    </div>
  </div>

  {/* Right Section - Overlapping Avatars */}
  <div className="relative flex -space-x-3">
    <img src={pfp} alt="User" className="w-6 h-6 rounded-full border border-white" />
    <img src={pfp} alt="User" className="w-6 h-6 rounded-full border border-white" />
    <div className="w-6 h-6 rounded-full bg-gray-400 flex items-center justify-center text-xs text-white border border-white">+8</div>
  </div>
</div>
    
      </div>
     
      </div>
      </section>













    </div>









  );
}

export default Dashboard;
