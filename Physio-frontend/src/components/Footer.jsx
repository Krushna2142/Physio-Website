import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10 py-6 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} PhysioCare. All rights reserved.
    </footer>
  );
}
