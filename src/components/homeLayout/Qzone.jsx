import React from "react";
import swimmingImg from "../../assets/qZone1.png";
import classroomImg from "../../assets/qZone2.png";
import playgroundImg from "../../assets/qZone3.png";
const Qzone = () => {
  return (
    <div className="bg-base-200 p-2">
      <h2 className="font-bold mb-4">Qzone</h2>
      <div className="space-y-2">
        <img src={swimmingImg} alt="" />
        <img src={classroomImg} alt="" />
        <img src={playgroundImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
