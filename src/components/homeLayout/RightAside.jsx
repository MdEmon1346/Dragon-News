import SocialLogIn from "./SocialLogIn";

import FindUs from "./FindUs";
import Qzone from "./Qzone";

const RightAside = () => {
  return (
    <div className=" space-y-8 ">
      <SocialLogIn></SocialLogIn>
   
      <FindUs></FindUs>

      <Qzone></Qzone>
    </div>
  );
};

export default RightAside;
