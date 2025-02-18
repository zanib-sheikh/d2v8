import { useState } from "react";
import ppp from "/src/assets/ppp.png";
import { Trash2, PencilLine, ImagePlus } from "lucide-react";
import { LuCircleUserRound } from "react-icons/lu";

function Partners() {
  const [showDiv, setShowDiv] = useState(false);

  return (
    <div className="flex flex-col min-h-screen items-center mt-6 bg-blue-50 w-full px-6">
      <div className="flex w-full items-start">
        <h1 className="text-3xl my-16 ml-8 font-bold text-left">Partners</h1>
      </div>
      
      <div className="w-full flex flex-col items-center">
        <div className="bg-white px-4 py-4 rounded-lg shadow-md w-full ">
          <div className="flex justify-end pb-4 pt-3">
            <button 
              className="bg-orange-500 text-white px-4 animate-bounce py-2 rounded-full shadow-md hover:bg-green-500 transition-all"
              onClick={() => setShowDiv(true)}
            >
              + Add
            </button>
          </div>
          
          {showDiv && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              
              <div className="bg-white p-6 rounded-lg shadow-md w-[800px]">
  <div className="flex justify-between items-start">
    <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
    <button onClick={() => setShowDiv(false)} className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md">Close</button>
  </div>

  <div className="grid grid-cols-2 gap-6">
    {/* Left Column - Profile Picture, Name, Surname */}
    <div>
      <div className="flex items-center gap-4  border-gray-300 p-4 rounded-lg mb-4">
      <div className="w-24 h-24 bg-gray-100 border-dashed border-2 flex flex-col items-center justify-center border-gray-400 text-center">
  <ImagePlus className="text-gray-400 w-6 h-6 mb-1" />
  <h1 className="text-xs text-gray-500">Upload Your Photo</h1>
</div>

        <div className="flex gap-2">
          <button className="bg-orange-600 text-white px-4 py-2  hover:bg-orange-800 transition-all rounded-full">Delete</button>
          <button className="bg-orange-600 text-white px-4 py-2  hover:bg-green-500 transition-all rounded-full">Upload</button>
        </div>
      </div>

      <div className="mb-2 mt-4">
        <label className="block text-gray-700">User name</label>
        <input type="text" className="w-full p-2 bg-gray-100 rounded-lg border border-gray-400" defaultValue="Kate" />
      </div>

      <div>
        <label className="block text-gray-700">User surname</label>
        <input type="text" className="w-full p-2 bg-gray-100 rounded-lg border border-gray-400" defaultValue="Paisley" />
      </div>
    </div>

    {/* Right Column - Jobs, Email, Bio */}
    <div>
      <div className="mb-4">
        <label className="block text-gray-700">Jobs</label>
        <input type="text" className="w-full p-2 bg-gray-100 rounded-lg border border-gray-400" defaultValue="Project Designer" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="text" className="w-full p-2 bg-gray-100 rounded-lg border border-gray-400" defaultValue="Katepaisley@gmail.com" />
      </div>

      <div>
        <label className="block text-gray-700">Your bio</label>
        <textarea className="w-full h-[110px] p-2 bg-gray-100 rounded-lg border border-gray-400" placeholder="Add a short bio..."></textarea>
      </div>
    </div>
  </div>
</div>
            
            </div>
          )}
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Job</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Contact</th>
                  <th className="px-4 py-2">Company</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(8)].map((_, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2 flex items-center space-x-1">
                      <img src={ppp} alt="User" className="w-8 h-8 rounded-full" />
                      <span>Justin Lipshutz</span>
                    </td>
                    <td className="px-4 py-2">Marketing</td>
                    <td className="px-4 py-2">abc@xyz.com</td>
                    <td className="px-4 py-2">+6465355555</td>
                    <td className="px-4 py-2">abc@xyz.com</td>
                    <td className="px-4 py-2">
                      <span className="bg-green-100 text-green-600 border-green-500 border px-3 py-1 rounded">Active</span>
                    </td>
                    <td className="px-4 py-2 flex space-x-2">
                      <button className="text-gray-500 hover:text-green-500"><PencilLine className="w-5 h-auto"/></button>
                      <button className="text-gray-500 hover:text-red-500"><Trash2 className="w-5 h-auto"/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>



      
    </div>
  );
};

export default Partners;
