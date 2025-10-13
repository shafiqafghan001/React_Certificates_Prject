import React from "react";

export default function BottomFooter() {
  return (
    <div className="w-full bg-cyan-400 py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-black text-sm">
        <div>
          React Certification TM © Powered by{" "}
          <span className="font-bold">Certificates.dev</span>
        </div>

        <div>BitterBrains Inc · Certificates.dev</div>
      </div>
    </div>
  );
}
