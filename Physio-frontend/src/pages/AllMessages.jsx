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
    <div className="min-h-screen px-4 md:px-8 pt-24 pb-10 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
          Admin Dashboard – All Messages
        </h1>

        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-gray-700 font-medium">
            Total Messages: {messages.length}
          </p>
          <button
            onClick={handleExport}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition text-sm md:text-base"
          >
            Export to Excel
          </button>
        </div>

        {error && (
          <div className="text-red-600 text-sm mb-4 font-semibold">{error}</div>
        )}

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="w-full table-auto text-left min-w-[600px]">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">#</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">Name</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">Email</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">Message</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">Date</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg, index) => (
                <tr key={msg._id} className=" text-blue-800 border-b hover:bg-gray-50">
                  <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">{index + 1}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">{msg.name}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base break-words">{msg.email}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base max-w-xs truncate">{msg.message}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 md:py-3 px-2 md:px-4">
                    <button
                      onClick={() => handleDelete(msg._id)}
                      className="bg-red-600 text-white px-2 md:px-3 py-1 rounded-md hover:bg-red-700 transition text-xs md:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {messages.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500 text-sm md:text-base">
                    No messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllMessages;
