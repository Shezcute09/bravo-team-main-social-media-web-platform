import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react"; // Import Cloudinary components
import settingsicon from "../../assets/images/settingsicon.svg";
import srch from "../../assets/images/srch.svg";
import mic from "../../assets/images/mic.svg";

const Messages = () => {
  const initialMessages = [
    {
      name: "Vivian Ene",
      profilePicture:
        "https://res.cloudinary.com/dfo4alc3w/image/upload/v1734185094/Ellipse_38_g2nhro.png",
      lastMessage: "Last price is 5K.",
      unreadCount: 3,
    },
    {
      name: "Olabisi Adewale",
      profilePicture:
        "https://res.cloudinary.com/dfo4alc3w/image/upload/v1734184749/Ellipse_39_ttn9bo.png",
      lastMessage: "Voice Note",
      unreadCount: 2,
    },
    {
      name: "Jidenna Chukwuka",
      profilePicture:
        "https://res.cloudinary.com/dfo4alc3w/image/upload/v1734184751/Ellipse_40_a2flwn.png",
      lastMessage: "Voice Note",
      unreadCount: 2,
    },
    {
      name: "Emily Naomi",
      profilePicture:
        "https://res.cloudinary.com/dfo4alc3w/image/upload/v1734184756/Ellipse_36_daprf2.png",
      lastMessage: "Voice Note",
      unreadCount: 2,
    },
    {
      name: "Ezekiel Effiong",
      profilePicture:
        "https://res.cloudinary.com/dfo4alc3w/image/upload/v1734185065/Ellipse_41_jtmhfy.png",
      lastMessage: "I love you dear.",
      unreadCount: 2,
    },
    {
      name: "Jennifer Austine-Paul",
      profilePicture:
        "https://res.cloudinary.com/dfo4alc3w/image/upload/v1734185078/Ellipse_42_mou9vj.png",
      lastMessage: "Typing......",
      unreadCount: 2,
    },
    {
      name: "Obianuju Ibe",
      profilePicture:
        "https://res.cloudinary.com/dfo4alc3w/image/upload/v1734185086/Ellipse_42_1_jgy4fc.png",
      lastMessage: "I'm coming now.",
      unreadCount: 2,
    },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setMessages(
      initialMessages.filter((message) =>
        message.name.toLowerCase().includes(value)
      )
    );
  };

  const handleSelectMessage = (index) => {
    setSelectedMessageIndex(index);
  };

  return (
    <div className="flex h-screen bg-gray-50 ml-4">
      {/* Sidebar */}
      <div className="flex flex-col w-[330px] h-full border bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="w-full p-4 border-b">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Messages</h1>
            <Link to="/settings">
              <img
                src={settingsicon}
                alt="Settings Icon"
                className="w-5 h-5 cursor-pointer"
              />
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative px-4 py-3">
          <input
            type="text"
            placeholder="Search Direct Messages"
            className="w-full p-2.5 border rounded-lg text-sm pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <img
            src={srch}
            alt="Search Icon"
            className="absolute top-3 left-4 w-4 h-4 text-gray-500"
          />
        </div>

        {/* Messages List */}
        <ul className="flex-1 overflow-y-auto p-3 space-y-3">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg shadow-sm cursor-pointer transition-all 
              ${
                selectedMessageIndex === index
                  ? "bg-blue-100 border border-blue-500"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
              onClick={() => handleSelectMessage(index)}
            >
              <div className="flex items-center space-x-3">
                <Image
                  cloudName="dfo4alc3w"
                  publicId={message.profilePicture.replace(
                    "https://res.cloudinary.com/dfo4alc3w/image/upload/",
                    ""
                  )}
                  className="w-10 h-10 rounded-full object-cover"
                >
                  <Transformation crop="scale" width="40" height="40" />
                </Image>
                <div>
                  <p className="text-sm font-medium">{message.name}</p>
                  <p className="text-xs text-gray-500 flex items-center">
                    {message.lastMessage === "Voice Note" && (
                      <img
                        src={mic}
                        alt="Voice Note"
                        className="w-4 h-4 mr-1"
                      />
                    )}
                    {message.lastMessage}
                  </p>
                </div>
              </div>
              {message.unreadCount > 0 && (
                <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-blue-500 rounded-full">
                  {message.unreadCount}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Chat Area */}
      <div className="w-[707px] h-full bg-white rounded-lg shadow-md flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-2xl font-semibold mb-4">Select a message</h2>
          <p className="text-gray-500 mb-6">
            Choose from your existing conversations, <br /> or start a new one.
          </p>
          <Link to="/chat">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600">
              Start a new conversation
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Messages;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Image, Transformation } from "cloudinary-react"; // Import Cloudinary components
// import settingsicon from "../../assets/images/settingsicon.svg";
// import srch from "../../assets/images/srch.svg";

// const Messages = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch messages from Cloudinary-hosted JSON file
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await fetch("https://res.cloudinary.com/dfo4alc3w/raw/upload/v<actual-timestamp>/Messagechat.json"
//           // Replace <timestamp> with the correct version
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Fetched Messages:", data); // Debug: Log the fetched data
//         setMessages(data);
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMessages();
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-50 p-4">
//       {/* Sidebar */}
//       <div className="w-[330px] h-full border bg-white rounded-lg shadow-md">
//         {/* Header */}
//         <div className="w-full p-4 border-b">
//           <div className="flex justify-between items-center">
//             <h1 className="text-lg font-semibold">Messages</h1>
//             <Link to="/settings">
//               <img
//                 src={settingsicon}
//                 alt="Settings Icon"
//                 className="w-5 h-5 cursor-pointer"
//               />
//             </Link>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="relative mt-4 px-4">
//           <input
//             type="text"
//             placeholder="Search Direct Messages"
//             className="w-full p-3 border rounded-lg text-sm pl-10 focus:outline-none"
//           />
//           <img
//             src={srch}
//             alt="Search Icon"
//             className="absolute top-3 left-5 w-4 h-4 text-gray-500"
//           />
//         </div>

//         {/* Messages List */}
//         <ul className="p-4 space-y-4">
//           {loading ? (
//             <p className="text-center text-gray-500">Loading...</p>
//           ) : messages.length > 0 ? (
//             messages.map((message, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100"
//               >
//                 <div className="flex items-center space-x-4">
//                   {/* Cloudinary Image Component */}
//                   <Image
//                     cloudName="dfo4alc3w"
//                     publicId={message.profilePicture.replace(
//                       "https://res.cloudinary.com/dfo4alc3w/image/upload/",
//                       ""
//                     )}
//                     className="w-10 h-10 rounded-full object-cover"
//                   >
//                     <Transformation crop="scale" width="40" height="40" />
//                   </Image>
//                   <div>
//                     <p className="text-sm font-medium">{message.name}</p>
//                     <p className="text-xs text-gray-500 truncate">
//                       {message.lastMessage}
//                     </p>
//                   </div>
//                 </div>
//                 {message.unreadCount > 0 && (
//                   <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-blue-500 rounded-full">
//                     {message.unreadCount}
//                   </span>
//                 )}
//               </li>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No messages found.</p>
//           )}
//         </ul>
//       </div>

//       {/* Main Chat Area */}
//       <div className="w-[700px] h-full bg-white rounded-lg shadow-md flex items-center justify-center">
//         <div className="text-center px-6">
//           <h2 className="text-2xl font-semibold mb-4">Select a message</h2>
//           <p className="text-gray-500 mb-6">
//             Choose from your existing conversations, <br /> or start a new one.
//           </p>
//           <Link to="/chat">
//             <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600">
//               Start a new conversation
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messages;




// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import settingsicon from "../../assets/images/settingsicon.svg";
// import srch from "../../assets/images/srch.svg";

// const Messages = () => {
//   // State to hold the list of messages
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch messages from API
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await fetch("https://api.example.com/messages"); // Replace with your API endpoint
//         const data = await response.json();
//         setMessages(data); // Assuming `data` is an array of messages
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMessages();
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar (Messages) */}
//       <div className="w-[330px] h-full border-r bg-white ml-4">
//         {/* Header */}
//         <div className="w-full p-4 border-b">
//           <div className="flex justify-between items-center">
//             <h1 className="text-lg font-semibold">Messages</h1>
//             {/* Settings Icon as Link */}
//             <Link to="/settings">
//               <img src={settingsicon} alt="Settings Icon" className="w-5 h-5 cursor-pointer" />
//             </Link>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="relative mt-4 px-4">
//           <input
//             type="text"
//             placeholder="Search Direct Messages"
//             className="w-full p-2 border rounded-md text-sm pl-8"
//           />
//           {/* Search Icon as Link */}
//           <Link to="/search">
//             <img
//               src={srch}
//               alt="Search Icon"
//               className="absolute top-3 left-6 w-4 h-4 cursor-pointer"
//             />
//           </Link>
//         </div>

//         {/* Messages List */}
//         <ul className="p-4 space-y-4">
//           {loading ? (
//             <p className="text-center text-gray-500">Loading...</p>
//           ) : messages.length > 0 ? (
//             messages.map((message, index) => (
//               <li key={index} className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={message.profilePicture || "https://via.placeholder.com/40"}
//                     alt={message.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <div>
//                     <p className="text-sm font-medium">{message.name}</p>
//                     <p className="text-xs text-gray-500">{message.lastMessage}</p>
//                   </div>
//                 </div>
//                 {message.unreadCount > 0 && (
//                   <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-blue-500 rounded-full">
//                     {message.unreadCount}
//                   </span>
//                 )}
//               </li>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No messages found.</p>
//           )}
//         </ul>
//       </div>

//       {/* Separator */}
//       <div className="w-[1px] bg-gray-200"></div>

//       {/* Main Chat Area */}
//       <div className="w-[700px] h-full bg-gray-200 flex items-center justify-center">
//         <div className="text-center px-6">
//           <h2 className="text-2xl font-semibold mb-4">Select a message</h2>
//           <p className="text-gray-500 mb-6">
//             Choose from your existing conversations, <br /> or start a new one.
//           </p>
//           {/* Start a New Conversation Button as Link */}
//           <Link to="/chat">
//             <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600">
//               Start a new conversation
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Filler Area */}
//       <div className="flex-grow bg-gray-50"></div>
//     </div>
//   );
// };

// export default Messages;



// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import settingsicon from "../../assets/images/settingsicon.svg";
// import srch from "../../assets/images/srch.svg";

// const Messages = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // Fetch messages from API
//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await fetch("https://api.example.com/messages"); // Replace with your API endpoint
//         const data = await response.json();
//         setMessages(data); // Assuming `data` is an array of messages
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMessages();
//   }, []);

//   const handleSelectUser = (user) => {
//     navigate(`/chat/${user.id}`, { state: user });
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <div className="w-[330px] h-full border-r bg-white ml-4">
//         <div className="w-full p-4 border-b">
//           <div className="flex justify-between items-center">
//             <h1 className="text-lg font-semibold">Messages</h1>
//             <Link to="/settings">
//               <img src={settingsicon} alt="Settings Icon" className="w-5 h-5 cursor-pointer" />
//             </Link>
//           </div>
//         </div>

//         <div className="relative mt-4 px-4">
//           <input
//             type="text"
//             placeholder="Search Direct Messages"
//             className="w-full p-2 border rounded-md text-sm pl-8"
//           />
//           <img src={srch} alt="Search Icon" className="absolute top-3 left-6 w-4 h-4 cursor-pointer" />
//         </div>

//         <ul className="p-4 space-y-4">
//           {loading ? (
//             <p className="text-center text-gray-500">Loading...</p>
//           ) : messages.length > 0 ? (
//             messages.map((message, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-between cursor-pointer"
//                 onClick={() => handleSelectUser(message)}
//               >
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={message.profilePicture || "https://via.placeholder.com/40"}
//                     alt={message.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <div>
//                     <p className="text-sm font-medium">{message.name}</p>
//                     <p className="text-xs text-gray-500">{message.lastMessage}</p>
//                   </div>
//                 </div>
//                 {message.unreadCount > 0 && (
//                   <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-blue-500 rounded-full">
//                     {message.unreadCount}
//                   </span>
//                 )}
//               </li>
//             ))
//           ) : (
//             <p className="text-center text-gray-500">No messages found.</p>
//           )}
//         </ul>
//       </div>

//       <div className="w-[1px] bg-gray-200"></div>

//       <div className="w-[700px] h-full bg-gray-200 flex items-center justify-center">
//         <div className="text-center px-6">
//           <h2 className="text-2xl font-semibold mb-4">Select a message</h2>
//           <p className="text-gray-500 mb-6">
//             Choose from your existing conversations, <br /> or start a new one.
//           </p>
//           <Link to="/chat">
//             <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600">
//               Start a new conversation
//             </button>
//           </Link>
//         </div>
//       </div>

//       <div className="flex-grow bg-gray-50"></div>
//     </div>
//   );
// };

// export default Messages;







// import React from "react";
// import { Link } from "react-router-dom";  // Import Link from react-router-dom
// import settingsicon from "../../assets/images/settingsicon.svg";
// import srch from "../../assets/images/srch.svg";

// const Messages = () => {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar (Messages) */}
//       <div className="w-[330px] h-full border-r bg-white ml-4">
//         {/* Header */}
//         <div className="w-full p-4 border-b">
//           <div className="flex justify-between items-center">
//             <h1 className="text-lg font-semibold">Messages</h1>
//             {/* Settings Icon as Link */}
//             <Link to="/settings">
//               <img src={settingsicon} alt="Settings Icon" className="w-5 h-5 cursor-pointer" />
//             </Link>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="relative mt-4 px-4">
//           <input
//             type="text"
//             placeholder="Search Direct Messages"
//             className="w-full p-2 border rounded-md text-sm pl-8"
//           />
//           {/* Search Icon as Link */}
//           <Link to="/search">
//             <img
//               src={srch}
//               alt="Search Icon"
//               className="absolute top-3 left-6 w-4 h-4 cursor-pointer"
//             />
//           </Link>
//         </div>

//         {/* Messages List */}
//         <ul className="p-4 space-y-4">
//           {/* Individual Messages */}
//           <li className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-sm font-medium">Vivian Ene</p>
//                 <p className="text-xs text-gray-500">Last price is 5k</p>
//               </div>
//             </div>
//             <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-blue-500 rounded-full">
//               2
//             </span>
//           </li>

//           <li className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-sm font-medium">Obalisi Adewale</p>
//                 <p className="text-xs text-gray-500">Voice Note</p>
//               </div>
//             </div>
//             <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-blue-500 rounded-full">
//               2
//             </span>
//           </li>
//         </ul>
//       </div>

//       {/* Separator */}
//       <div className="w-[1px] bg-gray-200"></div>

//       {/* Main Chat Area */}
//       <div className="w-[700px] h-full bg-gray-200 flex items-center justify-center">
//         <div className="text-center px-6">
//           <h2 className="text-2xl font-semibold mb-4">Select a message</h2>
//           <p className="text-gray-500 mb-6">
//             Choose from your existing conversations, <br /> or start a new one.
//           </p>
//           {/* Start a New Conversation Button as Link */}
//           <Link to="/chat">
//             <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600">
//               Start a new conversation
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Filler Area */}
//       <div className="flex-grow bg-gray-50"></div>
//     </div>
//   );
// };

// export default Messages;










