import React, { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const AllMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/contact/messages", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessages(res.data);
    } catch (err) {
      setError("❌ Error fetching messages");
      console.error("Error fetching messages:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("adminToken");
      await axios.delete(`http://localhost:5000/api/contact/messages/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("❌ Failed to delete message");
    }
  };

  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(messages);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Messages");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const data = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(data, "messages.xlsx");
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 pt-20 md:pt-24 pb-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-4 md:mb-6 text-center">
          Admin Dashboard – All Messages
        </h1>

        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-gray-700 font-medium text-sm md:text-base">
            Total Messages: {messages.length}
          </p>
          <button
            onClick={handleExport}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition text-sm md:text-base w-full sm:w-auto"
          >
            Export to Excel
          </button>
        </div>

        {error && (
          <div className="text-red-600 text-sm mb-4 font-semibold text-center">{error}</div>
        )}

        {/* Mobile Card View */}
        <div className="block md:hidden space-y-4">
          {messages.map((msg, index) => (
            <div key={msg._id} className="bg-white shadow-md rounded-lg p-4">
              <div className="mb-2">
                <span className="text-sm font-semibold text-gray-600">#{index + 1}</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-blue-800">Name:</span>
                <span className="ml-2 text-gray-700">{msg.name}</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-blue-800">Email:</span>
                <span className="ml-2 text-gray-700 text-sm">{msg.email}</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-blue-800">Message:</span>
                <p className="text-gray-700 text-sm mt-1">{msg.message}</p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-blue-800">Date:</span>
                <span className="ml-2 text-gray-700 text-sm">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </span>
              </div>
              <button
                onClick={() => handleDelete(msg._id)}
                className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition text-sm w-full"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full table-auto text-left min-w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-2 lg:px-4 text-xs lg:text-sm">#</th>
                <th className="py-3 px-2 lg:px-4 text-xs lg:text-sm">Name</th>
                <th className="py-3 px-2 lg:px-4 text-xs lg:text-sm">Email</th>
                <th className="py-3 px-2 lg:px-4 text-xs lg:text-sm">Message</th>
                <th className="py-3 px-2 lg:px-4 text-xs lg:text-sm">Date</th>
                <th className="py-3 px-2 lg:px-4 text-xs lg:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={msg._id} className="text-blue-800 border-b hover:bg-gray-50">
                  <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm">{index + 1}</td>
                  <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm">{msg.name}</td>
                  <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm break-all">{msg.email}</td>
                  <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm max-w-xs truncate">{msg.message}</td>
                  <td className="py-3 px-2 lg:px-4 text-xs lg:text-sm whitespace-nowrap">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-2 lg:px-4">
                    <button
                      onClick={() => handleDelete(msg._id)}
                      className="bg-red-600 text-white px-2 lg:px-3 py-1 rounded-md hover:bg-red-700 transition text-xs lg:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {messages.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500 text-sm">
                    No messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile No Messages State */}
        {messages.length === 0 && (
          <div className="block md:hidden text-center py-8 text-gray-500">
            No messages found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllMessages;
