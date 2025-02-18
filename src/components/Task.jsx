import { useState } from "react";
import { BookOpen, ListTodo, Inbox, Home, User, Building, Briefcase, Calendar, ShoppingCart, Folder,  Square, Hourglass, Repeat2, CheckCheck, Search, LayoutList, BookMarked, ListChecks, Table2, ChevronDown, PlusIcon } from "lucide-react";
import { LuListCheck, LuMessageCircleMore, LuSquareCheckBig } from "react-icons/lu";

import img from "/src/assets/img.png";
import { FaEllipsis } from "react-icons/fa6";


const Task = () => {
    const [activeSection, setActiveSection] = useState("Board"); // Default to Board
  const [tasks, setTasks] = useState({
    "Want-to-do": ["To live more economically", "To reduce stress on the job"],
    "Prepare-to-do": ["To exercise more", "To eat healthier", "To lose weight"],
    Doing: ["To spend more time with family", "To spend less time on social media"],
    Done: ["To pay a loan", "To quit smoking"],
    Lists: [
      { name: "Collaborative Book", icon: <BookOpen size={16} /> },
      { name: "Work to-Do", icon: <ListTodo size={16} /> },
      { name: "INBOX", icon: <Inbox size={16} /> },
      { name: "HOME", icon: <Home size={16} /> },
      { name: "Personal", icon: <User size={16} /> },
      { name: "Household", icon: <Building size={16} /> },
      { name: "Weekend Project", icon: <Briefcase size={16} /> },
      { name: "Someday", icon: <Calendar size={16} /> },
      { name: "Shopping List", icon: <ShoppingCart size={16} /> },
      { name: "WORK", icon: <Folder size={16} /> },
    ],
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen  p-6 items-center mt-12 bg-blue-50 w-full">

<section id="task" >  
<h1 className="text-3xl px-8  w-full font-bold  mt-2">Tasks</h1>

<p className="text-md  px-8  w-full py-1">Short description will be placed here.</p>

<div className="rounded-2 w-full bg-sky-50 p-4">
   

<div className="mb-3 px-6 text-gray-900 text-sm flex justify-between items-center">
  {/* Left Section: Navigation Tabs */}
  <div className="flex gap-9">
    <h1 
      className={`flex cursor-pointer ${activeSection === "Board" ? "text-blue-600 font-bold" : ""}`} 
      onClick={() => setActiveSection("Board")}
    >
      <BookMarked className="pr-1 w-5 h-auto" /> Board
    </h1>
    <h1 
      className={`flex animate-pulse cursor-pointer ${activeSection === "Lists" ? "text-blue-600 font-bold" : ""}`} 
      onClick={() => setActiveSection("Lists")}
    >
      <ListTodo className="pr-1 w-5 h-auto" /> Lists
    </h1>
    <h1 
      className={`flex cursor-pointer ${activeSection === "Timeline" ? "text-blue-600 font-bold" : ""}`} 
      onClick={() => setActiveSection("Timeline")}
    >
      <ListChecks className="pr-1 w-5 h-auto" /> Timeline
    </h1>
    <h1 
      className={`flex cursor-pointer ${activeSection === "Table" ? "text-blue-600 font-bold" : ""}`} 
      onClick={() => setActiveSection("Table")}
    >
      <Table2 className="pr-1 w-5 h-auto" /> Table
    </h1>
  </div>

  {/* Right Section: Icons */}
  <div className="flex items-center gap-4 pl-96">
    <h1 className="flex cursor-pointer">
      <PlusIcon className="pr-1 w-5 h-auto" /> Add 
      <ChevronDown className="pr-1 w-5 h-auto" />
    </h1>
    <Search className="w-5 h-auto cursor-pointer" />
    <LayoutList className="w-5 h-auto cursor-pointer" />
    <h1 className="flex cursor-pointer">
      December 
      <ChevronDown className="pr-1 w-5 h-auto" />
    </h1>
  </div>
</div>

           
               
             
            {activeSection === "Board" && (
              <div className="bg-blue-50 p-4 rounded-lg">
  <div className="grid px-2 grid-cols-3 gap-4">
    
    {/* Column 1 */}
    <div className="bg-[#CAD9F6] p-4 rounded-lg">
      <h2 className="font-semibold flex text-[#14367B] space-x-3 text-lg"><Square className="pr-3 w-8 h-auto"/>To Do</h2>
      
      <div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-sm flex text-gray-900">Design Homepage Wireframe<span><FaEllipsis className="pl-8 items-end w-12 h-auto"/></span></h3>
  <p className="text-gray-500 text-xs mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center space-x-44 mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-0 py-1 rounded">High</span>
    <img src={img} alt="User" className="w-6 h-6 rounded-full" /></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> <LuMessageCircleMore className="w-5 h-auto"/> <span className="ml-1">11</span></span>
      <span className="flex items-center"><Repeat2/> <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      
      <span className="text-green-500 font-medium flex items-center"> <CheckCheck className="w-5 h-auto"/> Done</span>
    </div>
  </div>
</div>
      


<div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-sm flex text-gray-900">Design Homepage Wireframe<span><FaEllipsis className="pl-8 items-end w-12 h-auto"/></span></h3>
  <p className="text-gray-500 text-xs mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center space-x-44 mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-0 py-1 rounded">High</span>
    <img src={img} alt="User" className="w-6 h-6 rounded-full" /></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> <LuMessageCircleMore className="w-5 h-auto"/> <span className="ml-1">11</span></span>
      <span className="flex items-center"><Repeat2/> <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      
      <span className="text-green-500 font-medium flex items-center"> <CheckCheck className="w-5 h-auto"/> Done</span>
    </div>
  </div>
</div>



<div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-sm flex text-gray-900">Design Homepage Wireframe<span><FaEllipsis className="pl-8 items-end w-12 h-auto"/></span></h3>
  <p className="text-gray-500 text-xs mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center space-x-44 mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-0 py-1 rounded">High</span>
    <img src={img} alt="User" className="w-6 h-6 rounded-full" /></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> <LuMessageCircleMore className="w-5 h-auto"/> <span className="ml-1">11</span></span>
      <span className="flex items-center"><Repeat2/> <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      
      <span className="text-green-500 font-medium flex items-center"> <CheckCheck className="w-5 h-auto"/> Done</span>
    </div>
  </div>
</div>

    </div>

    {/* Column 2 */}
    <div className="bg-[#FFE4C2] p-4 rounded-lg">
      <h2 className="font-semibold flex  text-[#8F4F00] text-lg"><Hourglass className="pr-3 w-8 h-auto"/>In Progress</h2>
       
      <div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-sm flex text-gray-900">Design Homepage Wireframe<span><FaEllipsis className="pl-8 items-end w-12 h-auto"/></span></h3>
  <p className="text-gray-500 text-xs mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center space-x-44 mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-0 py-1 rounded">High</span>
    <img src={img} alt="User" className="w-6 h-6 rounded-full" /></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> <LuMessageCircleMore className="w-5 h-auto"/> <span className="ml-1">11</span></span>
      <span className="flex items-center"><Repeat2/> <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      
      <span className="text-green-500 font-medium flex items-center"> <CheckCheck className="w-5 h-auto"/> Done</span>
    </div>
  </div>
</div>
      


<div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-sm flex text-gray-900">Design Homepage Wireframe<span><FaEllipsis className="pl-8 items-end w-12 h-auto"/></span></h3>
  <p className="text-gray-500 text-xs mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center space-x-44 mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-0 py-1 rounded">High</span>
    <img src={img} alt="User" className="w-6 h-6 rounded-full" /></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> <LuMessageCircleMore className="w-5 h-auto"/> <span className="ml-1">11</span></span>
      <span className="flex items-center"><Repeat2/> <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      
      <span className="text-green-500 font-medium flex items-center"> <CheckCheck className="w-5 h-auto"/> Done</span>
    </div>
  </div>
</div>



<div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-sm flex text-gray-900">Design Homepage Wireframe<span><FaEllipsis className="pl-8 items-end w-12 h-auto"/></span></h3>
  <p className="text-gray-500 text-xs mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center space-x-44 mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-0 py-1 rounded">High</span>
    <img src={img} alt="User" className="w-6 h-6 rounded-full" /></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> <LuMessageCircleMore className="w-5 h-auto"/> <span className="ml-1">11</span></span>
      <span className="flex items-center"><Repeat2/> <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      
      <span className="text-green-500 font-medium flex items-center"> <CheckCheck className="w-5 h-auto"/> Done</span>
    </div>
  </div>
</div>

    </div>

    {/* Column 3 */}
    <div className="bg-[#FAD0C6] p-4 rounded-lg">
      <h2 className="font-semibold flex text-lg text-pink-800 "><LuSquareCheckBig className="pr-3 w-8 h-auto"/>Done</h2>
      
      <div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-sm flex text-gray-900">Design Homepage Wireframe<span><FaEllipsis className="pl-8 items-end w-12 h-auto"/></span></h3>
  <p className="text-gray-500 text-xs mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center space-x-44 mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-0 py-1 rounded">High</span>
    <img src={img} alt="User" className="w-6 h-6 rounded-full" /></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> <LuMessageCircleMore className="w-5 h-auto"/> <span className="ml-1">11</span></span>
      <span className="flex items-center"><Repeat2/> <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      
      <span className="text-green-500 font-medium flex items-center"> <CheckCheck className="w-5 h-auto"/> Done</span>
    </div>
  </div>
</div>
      


<div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-sm flex text-gray-900">Design Homepage Wireframe<span><FaEllipsis className="pl-8 items-end w-12 h-auto"/></span></h3>
  <p className="text-gray-500 text-xs mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center space-x-44 mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-0 py-1 rounded">High</span>
    <img src={img} alt="User" className="w-6 h-6 rounded-full" /></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> <LuMessageCircleMore className="w-5 h-auto"/> <span className="ml-1">11</span></span>
      <span className="flex items-center"><Repeat2/> <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      
      <span className="text-green-500 font-medium flex items-center"> <CheckCheck className="w-5 h-auto"/> Done</span>
    </div>
  </div>
</div>



<div className="bg-white p-3 rounded-md shadow mt-2 border">
  <h3 className="font-bold text-sm flex text-gray-900">Design Homepage Wireframe<span><FaEllipsis className="pl-8 items-end w-12 h-auto"/></span></h3>
  <p className="text-gray-500 text-xs mt-1"> Help businesses to clearly define their annual e-commerce digital strategy by creating a high-level plan.</p>
  <div className="flex items-center space-x-44 mt-3">
    <span className="bg-green-100 text-green-600 text-xs font-semibold px-0 py-1 rounded">High</span>
    <img src={img} alt="User" className="w-6 h-6 rounded-full" /></div>
  <div className="border-t mt-3 pt-3 flex justify-between items-center text-gray-400 text-sm">
    <div className="flex items-center space-x-2">
      <span className="flex items-center"> <LuMessageCircleMore className="w-5 h-auto"/> <span className="ml-1">11</span></span>
      <span className="flex items-center"><Repeat2/> <span className="ml-1">3</span></span></div>
    <div className="flex items-center space-x-2">
      
      <span className="text-green-500 font-medium flex items-center"> <CheckCheck className="w-5 h-auto"/> Done</span>
    </div>
  </div>
</div>

    </div>

  </div>
  </div>
)}
</div>
</section>












{activeSection === "Lists" && (
              <div className="bg-white   w-full min-h-screen rounded-lg items-center">

<div className="bg-white  px-4   w-full">
        <div className="grid grid-cols-5 mt-6 gap-2 w-full h-full">
          {Object.entries(tasks).map(([category, items]) => (
            <div key={category} className="bg-white   p-0 rounded-lg">
              {category === "Lists" ? (
                <>
                  <button 
                    className="font-semibold text-md py-2 border-2  animate-bounce rounded-md pl-2 hover:bg-gray-200 text-gray-700 w-full text-left flex items-center"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <LuListCheck className="px-2 w-8 h-8"/> {category} {isDropdownOpen ? "" : ""}
                  </button>
                  {isDropdownOpen && (
                    <ul className="mt-2 text-xs space-y-2 bg-gray-100 rounded-md p-2">
                      {items.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-md">
                          {item.icon} <span className="text-gray-700">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <>
                  <h2 className="font-semibold text-md py-2 border rounded-md pl-2 text-gray-700">{category}</h2>
                  <button className="mt-2 w-[160px] bg-gray-100 border text-gray-600 px-2 py-2 text-start rounded-lg text-sm">
                    + New Task
                  </button>
                  <ul className="mt-4 text-xs space-y-2">
                    {items.map((task, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span className="text-gray-600">{task}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {activeSection === "Timeline" && (
              <div className="bg-[#E2E8F0] p-4 rounded-lg">
                <h2 className="font-semibold text-lg mt-14 text-[#1E293B]">Timeline View</h2>
                <p>This is the timeline section where task progress is tracked.</p>
              </div>
            )}

            {activeSection === "Table" && (
              <div className="bg-[#D1FAE5] p-4 rounded-lg">
                <h2 className="font-semibold text-lg text-[#065F46]">Table View</h2>
                <p>This is the table section where tasks are displayed in table format.</p>
              </div>
            )}
                
              </div>
            )}


     
    </div>
  );
};

export default Task;
