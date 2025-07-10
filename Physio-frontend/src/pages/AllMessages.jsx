import React, { useEffect, useState } from "react";
import axios from "axios";

const AllMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/contact");
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    fetchMessages();
  }, []);

  return (
    <div className="flex flex-col-1 min-h-screen bg-gray-100 pt-24 px-4">
      <div className="w-full mx-auto">  {/* Changed max-w-7xl to w-full */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          📨 All Contact Messages ({messages.length})
        </h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
          <table className="min-w-full text-sm text-gray-800">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Message</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{msg.name}</td>
                  <td className="px-4 py-2">{msg.email}</td>
                  <td className="px-4 py-2">{msg.message}</td>
                  <td className="px-4 py-2">
                    {new Date(msg.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllMessages;
