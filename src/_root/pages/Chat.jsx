import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import settingsicon from "../../assets/images/settingsicon.svg";
import srch from "../../assets/images/srch.svg";
import dott from "../../assets/images/dott.svg";
import camera from "../../assets/images/camera.svg";
import gallary from "../../assets/images/gallary.svg";
import mic from "../../assets/images/mic.svg";
import pho from "../../assets/images/pho.svg";
import sendicon from "../../assets/images/sendicon.svg";
import { Image, Transformation } from "cloudinary-react";

const Chat = () => {
  const { state: user } = useLocation(); // Getting user data passed from the previous page

  // Hardcoded message data
  const messagesList = [
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

  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeChat, setActiveChat] = useState(null); // To store the currently active chat user

  // Actions
  const handleVideoCall = () => alert("Starting a video call...");
  const handleVoiceCall = () => alert("Starting a voice call...");
  const handleMoreOptions = () => alert("Opening more options...");
  const handleGallery = () => alert("Opening gallery...");
  const handleVoiceRecord = () => alert("Recording voice...");
  const handleSendMessage = () => alert("Message sent!");

  // Filter messages based on search
  const filteredMessagesList = messagesList.filter((message) =>
    message.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle clicking on a message name to display chat
  const handleChatClick = (name) => {
    const selectedUser = messagesList.find((message) => message.name === name);
    setActiveChat(selectedUser); // Update the active chat user

    // Example chat messages based on user selection
    if (name === "Vivian Ene") {
      setMessages([
        { text: "How are you doing today?", isSender: false },
        { text: "I am doing good, you?", isSender: true },
      ]);
    } else {
      setMessages([
        { text: `Chat with ${name} started.`, isSender: false },
      ]);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar (Messages) */}
      <div className="flex flex-col w-[300px] h-full border-r bg-white rounded-lg shadow-md overflow-hidden ml-4">
        {/* Header */}
        <div className="w-full p-4 border-b">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Messages</h1>
            <img src={settingsicon} alt="Settings Icon" className="w-5 h-5" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mt-4 px-4">
          <input
            type="text"
            placeholder="Search Direct Messages"
            className="w-full p-2 border rounded-md text-sm pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img
            src={srch}
            alt="Search Icon"
            className="absolute top-3 left-6 w-4 h-4"
          />
        </div>

        {/* Messages List */}
        <ul className="flex-1 overflow-y-auto p-8 space-y-8">
          {filteredMessagesList.map((message, index) => (
            <li
              key={index}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-lg"
              onClick={() => handleChatClick(message.name)}
            >
              <div className="flex items-center space-x-4">
                {/* Cloudinary Image Component */}
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
                        src={mic} // Use the mic icon or any icon for voice note
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
      <div className="w-[700px] flex-shrink-0 bg-white flex flex-col border-l">
        {/* Chat Header */}
        <div className="w-full p-4 border-b flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {activeChat ? (
              <Image
                cloudName="dfo4alc3w"
                publicId={activeChat.profilePicture.replace(
                  "https://res.cloudinary.com/dfo4alc3w/image/upload/",
                  ""
                )}
                className="w-10 h-10 rounded-full object-cover"
              >
                <Transformation crop="scale" width="40" height="40" />
              </Image>
            ) : (
              <img
                src="https://via.placeholder.com/40"
                alt="Default User"
                className="w-10 h-10 rounded-full object-cover"
              />
            )}

            <div>
              <p className="font-medium text-gray-900">
                {activeChat ? activeChat.name : "Select a chat"}
              </p>
              <p className="text-sm text-green-500">
                {activeChat ? "Online" : ""}
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <img
              src={camera}
              alt="Camera"
              className="w-5 h-5 cursor-pointer"
              onClick={handleVideoCall}
            />
            <img
              src={pho}
              alt="Phone"
              className="w-5 h-5 cursor-pointer"
              onClick={handleVoiceCall}
            />
            <img
              src={dott}
              alt="More"
              className="w-5 h-5 cursor-pointer"
              onClick={handleMoreOptions}
            />
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-grow p-4 bg-gray-50 overflow-y-auto">
          <div className="text-center text-sm text-gray-500 mb-4">Today</div>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.isSender ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={`${
                    message.isSender ? "bg-blue-500 text-white" : "bg-gray-200"
                  } p-3 rounded-lg text-sm`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t flex items-center space-x-4">
          <input
            type="text"
            placeholder="Message"
            className="flex-grow p-3 border rounded-lg outline-none text-sm"
          />
          <img
            src={gallary}
            alt="Gallery"
            className="w-5 h-5 cursor-pointer hover:opacity-80"
            onClick={handleGallery}
          />
          <img
            src={mic}
            alt="Mic"
            className="w-5 h-5 cursor-pointer hover:opacity-80"
            onClick={handleVoiceRecord}
          />
          <button
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleSendMessage}
          >
            <img src={sendicon} alt="Send" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filler Area */}
      <div className="flex-grow bg-gray-50"></div>
    </div>
  );
};

export default Chat;



// import React, { useState, useEffect } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import settingsicon from "../../assets/images/settingsicon.svg";
// import srch from "../../assets/images/srch.svg";
// import dott from "../../assets/images/dott.svg";
// import camera from "../../assets/images/camera.svg";
// import gallary from "../../assets/images/gallary.svg";
// import mic from "../../assets/images/mic.svg";
// import pho from "../../assets/images/pho.svg";
// import sendicon from "../../assets/images/sendicon.svg";

// // Mock fetch function for messages
// const fetchMessages = async (id) => {
//   try {
//     const response = await fetch(`/api/messages/${id}`); // Your actual API endpoint
//     if (!response.ok) {
//       throw new Error("Failed to fetch messages");
//     }
//     const data = await response.json();
//     return data; // Return the data for use in the component
//   } catch (error) {
//     console.error("Error fetching messages:", error);
//     return []; // Return an empty array if error occurs
//   }
// };

// const Chat = () => {
//   const { id } = useParams(); // Getting conversation ID from params
//   const { state: user } = useLocation(); // Getting user data passed from previous page
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch messages when the component mounts
//   useEffect(() => {
//     const getMessages = async () => {
//       const data = await fetchMessages(id);
//       setMessages(data); // Update state with the fetched messages
//       setLoading(false);
//     };

//     getMessages();
//   }, [id]);

//   const handleVideoCall = () => {
//     alert("Starting a video call...");
//   };

//   const handleVoiceCall = () => {
//     alert("Starting a voice call...");
//   };

//   const handleMoreOptions = () => {
//     alert("Opening more options...");
//   };

//   const handleGallery = () => {
//     alert("Opening gallery...");
//   };

//   const handleVoiceRecord = () => {
//     alert("Recording voice...");
//   };

//   const handleSendMessage = () => {
//     alert("Message sent!");
//   };

//   if (loading) {
//     return <div>Loading messages...</div>;
//   }

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar (Messages) */}
//       <div className="w-[300px] h-full border-r bg-white ml-4">
//         {/* Header */}
//         <div className="w-full p-4 border-b">
//           <div className="flex justify-between items-center">
//             <h1 className="text-lg font-semibold">Messages</h1>
//             <img src={settingsicon} alt="Settings Icon" className="w-5 h-5" />
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="relative mt-4 px-4">
//           <input
//             type="text"
//             placeholder="Search Direct Messages"
//             className="w-full p-2 border rounded-md text-sm pl-8"
//           />
//           <img
//             src={srch}
//             alt="Search Icon"
//             className="absolute top-3 left-6 w-4 h-4"
//           />
//         </div>

//         {/* Messages List */}
//         <ul className="p-4 space-y-4">
//           {messages.map((message, index) => (
//             <li key={index} className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={message.profilePicture || "https://via.placeholder.com/40"}
//                   alt="Profile"
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="text-sm font-medium">{message.name}</p>
//                   <p className="text-xs text-gray-500">{message.lastMessage}</p>
//                 </div>
//               </div>
//               <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-blue-500 rounded-full">
//                 {message.unreadCount}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Chat Area */}
//       <div className="w-[700px] flex-shrink-0 bg-white flex flex-col border-l">
//         {/* Chat Header */}
//         <div className="w-full p-4 border-b flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <img
//               src={user?.profilePicture || "https://via.placeholder.com/40"}
//               alt={user?.name || "User"}
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div>
//               <p className="font-medium text-gray-900">{user?.name}</p>
//               <p className="text-sm text-green-500">Online</p>
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <img
//               src={camera}
//               alt="Camera"
//               className="w-5 h-5 cursor-pointer"
//               onClick={handleVideoCall}
//             />
//             <img
//               src={pho}
//               alt="Phone"
//               className="w-5 h-5 cursor-pointer"
//               onClick={handleVoiceCall} // Updated Phone Call action
//             />
//             <img
//               src={dott}
//               alt="More"
//               className="w-5 h-5 cursor-pointer"
//               onClick={handleMoreOptions}
//             />
//           </div>
//         </div>

//         {/* Chat Messages */}
//         <div className="flex-grow p-4 bg-gray-50 overflow-y-auto">
//           <div className="text-center text-sm text-gray-500 mb-4">Today</div>
//           <div className="space-y-4">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={message.isSender ? "flex justify-end" : "flex justify-start"}
//               >
//                 <div
//                   className={`${
//                     message.isSender ? "bg-blue-500 text-white" : "bg-gray-200"
//                   } p-3 rounded-lg text-sm`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Chat Input */}
//         <div className="p-4 border-t flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Message"
//             className="flex-grow p-3 border rounded-lg outline-none text-sm"
//           />
//           <img
//             src={gallary}
//             alt="Gallery"
//             className="w-5 h-5 cursor-pointer hover:opacity-80"
//             onClick={handleGallery}
//           />
//           <img
//             src={mic}
//             alt="Mic"
//             className="w-5 h-5 cursor-pointer hover:opacity-80"
//             onClick={handleVoiceRecord}
//           />
//           <button
//             className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//             onClick={handleSendMessage}
//           >
//             <img src={sendicon} alt="Send" className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Filler Area */}
//       <div className="flex-grow bg-gray-50"></div>
//     </div>
//   );
// };

// export default Chat;


// import React, { useState, useEffect } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import settingsicon from "../../assets/images/settingsicon.svg";
// import srch from "../../assets/images/srch.svg";
// import dott from "../../assets/images/dott.svg";
// import camera from "../../assets/images/camera.svg";
// import gallary from "../../assets/images/gallary.svg";
// import mic from "../../assets/images/mic.svg";
// import pho from "../../assets/images/pho.svg";
// import sendicon from "../../assets/images/sendicon.svg";

// const Chat = () => {
//   const { id } = useParams();
//   const { state: user } = useLocation();

//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMessages = async () => {
//       try {
//         const response = await fetch(`/api/messages/${id}`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch messages: ${response.status}`);
//         }
//         const data = await response.json();
//         setMessages(data);
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//         alert("An error occurred while fetching messages.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMessages();
//   }, [id]);

//   if (!user) {
//     return <div>Loading user data...</div>;
//   }

//   if (loading) {
//     return <div>Loading messages...</div>;
//   }

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar (Messages) */}
//       <div className="w-[300px] h-full border-r bg-white ml-4">
//         {/* Header */}
//         <div className="w-full p-4 border-b">
//           <div className="flex justify-between items-center">
//             <h1 className="text-lg font-semibold">Messages</h1>
//             <img src={settingsicon} alt="Settings Icon" className="w-5 h-5" />
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="relative mt-4 px-4">
//           <input
//             type="text"
//             placeholder="Search Direct Messages"
//             className="w-full p-2 border rounded-md text-sm pl-8"
//           />
//           <img
//             src={srch}
//             alt="Search Icon"
//             className="absolute top-3 left-6 w-4 h-4"
//           />
//         </div>

//         {/* Messages List */}
//         <ul className="p-4 space-y-4">
//           {messages.map((message, index) => (
//             <li key={index} className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={message.profilePicture || "https://via.placeholder.com/40"}
//                   alt="Profile"
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="text-sm font-medium">{message.name}</p>
//                   <p className="text-xs text-gray-500">{message.lastMessage}</p>
//                 </div>
//               </div>
//               <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-blue-500 rounded-full">
//                 {message.unreadCount}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Chat Area */}
//       <div className="w-[700px] flex-shrink-0 bg-white flex flex-col border-l">
//         {/* Chat Header */}
//         <div className="w-full p-4 border-b flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <img
//               src={user?.profilePicture || "https://via.placeholder.com/40"}
//               alt={user?.name || "User"}
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div>
//               <p className="font-medium text-gray-900">{user?.name}</p>
//               <p className="text-sm text-green-500">Online</p>
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <img
//               src={camera}
//               alt="Camera"
//               className="w-5 h-5 cursor-pointer"
//               onClick={() => alert(`Starting a video call with ${user.name}`)}
//             />
//             <img
//               src={pho}
//               alt="Phone"
//               className="w-5 h-5 cursor-pointer"
//               onClick={() => alert(`Starting a voice call with ${user.name}`)}
//             />
//             <img
//               src={dott}
//               alt="More"
//               className="w-5 h-5 cursor-pointer"
//               onClick={() => alert("Opening more options...")}
//             />
//           </div>
//         </div>

//         {/* Chat Messages */}
//         <div className="flex-grow p-4 bg-gray-50 overflow-y-auto">
//           <div className="text-center text-sm text-gray-500 mb-4">Today</div>
//           <div className="space-y-4">
//             {messages.map((message, index) => (
//               <div key={index} className={message.isSender ? "flex justify-end" : "flex justify-start"}>
//                 <div
//                   className={`${
//                     message.isSender ? "bg-blue-500 text-white" : "bg-gray-200"
//                   } p-3 rounded-lg text-sm`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Chat Input */}
//         <div className="p-4 border-t flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Message"
//             className="flex-grow p-3 border rounded-lg outline-none text-sm"
//           />
//           <img
//             src={gallary}
//             alt="Gallery"
//             className="w-5 h-5 cursor-pointer hover:opacity-80"
//             onClick={() => alert("Opening gallery...")}
//           />
//           <img
//             src={mic}
//             alt="Mic"
//             className="w-5 h-5 cursor-pointer hover:opacity-80"
//             onClick={() => alert("Recording voice...")}
//           />
//           <button
//             className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//             onClick={() => alert("Message sent!")}
//           >
//             <img src={sendicon} alt="Send" className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Filler Area */}
//       <div className="flex-grow bg-gray-50"></div>
//     </div>
//   );
// };

// export default Chat;



// import React from "react";
// import settingsicon from "../../assets/images/settingsicon.svg";
// import srch from "../../assets/images/srch.svg";
// import dott from "../../assets/images/dott.svg";
// import camera from "../../assets/images/camera.svg";
// import gallary from "../../assets/images/gallary.svg";
// import mic from "../../assets/images/mic.svg";
// import pho from "../../assets/images/pho.svg";
// import sendicon from "../../assets/images/sendicon.svg";

// const Chat = () => {
//   // Example functions for icon actions
//   const handleVideoCall = () => {
//     alert("Starting a video call...");
//   };

//   const handleVoiceCall = () => {
//     // Mock implementation for phone/voice call
//     alert("Starting a voice call...");
//     // If integrating with a VoIP API:
//     // - Initiate a real call here using Twilio, WebRTC, etc.
//     // - Open a modal or new interface for ongoing call management
//   };

//   const handleMoreOptions = () => {
//     alert("Opening more options...");
//   };

//   const handleGallery = () => {
//     alert("Opening gallery...");
//   };

//   const handleVoiceRecord = () => {
//     alert("Recording voice...");
//   };

//   const handleSendMessage = () => {
//     alert("Message sent!");
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar (Messages) */}
//       <div className="w-[300px] h-full border-r bg-white ml-4">
//         {/* Header */}
//         <div className="w-full p-4 border-b">
//           <div className="flex justify-between items-center">
//             <h1 className="text-lg font-semibold">Messages</h1>
//             <img src={settingsicon} alt="Settings Icon" className="w-5 h-5" />
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="relative mt-4 px-4">
//           <input
//             type="text"
//             placeholder="Search Direct Messages"
//             className="w-full p-2 border rounded-md text-sm pl-8"
//           />
//           <img
//             src={srch}
//             alt="Search Icon"
//             className="absolute top-3 left-6 w-4 h-4"
//           />
//         </div>

//         {/* Messages List */}
//         <ul className="p-4 space-y-4">
//           {["Vivian Ene", "Obalisi Adewale", "Jidenna Chukwuka", "Emily Naomi"].map(
//             (name, index) => (
//               <li key={index} className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src="https://via.placeholder.com/40"
//                     alt="Profile"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <div>
//                     <p className="text-sm font-medium">{name}</p>
//                     <p className="text-xs text-gray-500">
//                       {index === 0
//                         ? "Last price is 5k"
//                         : index === 1
//                         ? "Voice Note"
//                         : "Typing..."}
//                     </p>
//                   </div>
//                 </div>
//                 <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-blue-500 rounded-full">
//                   {index + 2}
//                 </span>
//               </li>
//             )
//           )}
//         </ul>
//       </div>

//       {/* Main Chat Area */}
//       <div className="w-[700px] flex-shrink-0 bg-white flex flex-col border-l">
//         {/* Chat Header */}
//         <div className="w-full p-4 border-b flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Profile"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div>
//               <p className="font-medium text-gray-900">Vivian Ene</p>
//               <p className="text-sm text-green-500">Online</p>
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <img
//               src={camera}
//               alt="Camera"
//               className="w-5 h-5 cursor-pointer"
//               onClick={handleVideoCall}
//             />
//             <img
//               src={pho}
//               alt="Phone"
//               className="w-5 h-5 cursor-pointer"
//               onClick={handleVoiceCall} // Updated Phone Call action
//             />
//             <img
//               src={dott}
//               alt="More"
//               className="w-5 h-5 cursor-pointer"
//               onClick={handleMoreOptions}
//             />
//           </div>
//         </div>

//         {/* Chat Messages */}
//         <div className="flex-grow p-4 bg-gray-50 overflow-y-auto">
//           <div className="text-center text-sm text-gray-500 mb-4">Today</div>
//           <div className="space-y-4">
//             <div className="flex justify-start">
//               <div className="bg-gray-200 p-3 rounded-lg text-sm">
//                 How are you doing today?
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <div className="bg-blue-500 text-white p-3 rounded-lg text-sm">
//                 I am doing good, you?
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Chat Input */}
//         <div className="p-4 border-t flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Message"
//             className="flex-grow p-3 border rounded-lg outline-none text-sm"
//           />
//           <img
//             src={gallary}
//             alt="Gallery"
//             className="w-5 h-5 cursor-pointer hover:opacity-80"
//             onClick={handleGallery}
//           />
//           <img
//             src={mic}
//             alt="Mic"
//             className="w-5 h-5 cursor-pointer hover:opacity-80"
//             onClick={handleVoiceRecord}
//           />
//           <button
//             className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//             onClick={handleSendMessage}
//           >
//             <img src={sendicon} alt="Send" className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Filler Area */}
//       <div className="flex-grow bg-gray-50"></div>
//     </div>
//   );
// };

// export default Chat;





// import React from "react";
// import settingsicon from "../../assets/images/settingsicon.svg";
// import srch from "../../assets/images/srch.svg";

// const Chat = () => {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar (Messages) */}
//       <div className="w-[25%] max-w-[330px] h-full border-r bg-white">
//         {/* Header */}
//         <div className="w-full p-4 border-b">
//           <div className="flex justify-between items-center">
//             <h1 className="text-lg font-semibold">Messages</h1>
//             <img src={settingsicon} alt="Settings Icon" className="w-5 h-5" />
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="relative mt-4 px-4">
//           <input
//             type="text"
//             placeholder="Search Direct Messages"
//             className="w-full p-2 border rounded-md text-sm pl-8"
//           />
//           <img
//             src={srch}
//             alt="Search Icon"
//             className="absolute top-3 left-6 w-4 h-4"
//           />
//         </div>

//         {/* Messages List */}
//         <ul className="p-4 space-y-4">
//           {/* Individual Messages */}
//           {["Vivian Ene", "Obalisi Adewale", "Jidenna Chukwuka", "Emily Naomi"].map(
//             (name, index) => (
//               <li key={index} className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src="https://via.placeholder.com/40"
//                     alt="Profile"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <div>
//                     <p className="text-sm font-medium">{name}</p>
//                     <p className="text-xs text-gray-500">
//                       {index === 0
//                         ? "Last price is 5k"
//                         : index === 1
//                         ? "Voice Note"
//                         : "Typing..."}
//                     </p>
//                   </div>
//                 </div>
//                 <span className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-blue-500 rounded-full">
//                   {index + 2}
//                 </span>
//               </li>
//             )
//           )}
//         </ul>
//       </div>

//       {/* Main Chat Area */}
//       <div className="flex-grow bg-white flex flex-col">
//         {/* Chat Header */}
//         <div className="w-full p-4 border-b flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Profile"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div>
//               <p className="font-medium text-gray-900">Vivian Ene</p>
//               <p className="text-sm text-green-500">Online</p>
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <button className="text-gray-500 hover:text-gray-900">
//               <i className="fas fa-phone-alt"></i>
//             </button>
//             <button className="text-gray-500 hover:text-gray-900">
//               <i className="fas fa-video"></i>
//             </button>
//             <button className="text-gray-500 hover:text-gray-900">
//               <i className="fas fa-ellipsis-v"></i>
//             </button>
//           </div>
//         </div>

//         {/* Chat Messages */}
//         <div className="flex-grow p-4 bg-gray-50 overflow-y-auto">
//           {/* Date Divider */}
//           <div className="text-center text-sm text-gray-500 mb-4">Today</div>

//           {/* Messages */}
//           <div className="space-y-4">
//             {/* Sender Message */}
//             <div className="flex justify-start">
//               <div className="bg-gray-200 p-3 rounded-lg text-sm">
//                 How are you doing today?
//               </div>
//             </div>

//             {/* Receiver Message */}
//             <div className="flex justify-end">
//               <div className="bg-blue-500 text-white p-3 rounded-lg text-sm">
//                 I am doing good, you?
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Chat Input */}
//         <div className="p-4 border-t flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Message"
//             className="flex-grow p-3 border rounded-lg outline-none text-sm"
//           />
//           <button className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">
//             <i className="fas fa-paperclip"></i>
//           </button>
//           <button className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//             <i className="fas fa-paper-plane"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;
