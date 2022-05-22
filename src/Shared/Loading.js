import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-20 h-20 border-b-2 border-gray-900 rounded-full animate-spin" />
    </div>
  );
};

export default Loading;