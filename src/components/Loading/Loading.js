import React from "react";

const Loading = () => {
  return (
    <div className="h-full ">
      <progress className="progress bg-white w-60 p-1.5 border-2 mt-20"></progress>
      <h1 className="text-white">Loading....</h1>
    </div>
  );
};

export default Loading;
