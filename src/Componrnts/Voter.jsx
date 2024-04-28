import React from "react";

function Voter() {
  return (
    <div className="w-full h-screen bg-orange-500 flex justify-center items-center">
      <div className="w-[60%] h-[80%] bg-white rounded-xl flex justify-center items-center ">
        <input type="checkbox" name="party 1" value="party1" />
      </div>
    </div>
  );
}

export default Voter;
