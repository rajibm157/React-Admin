import React from "react";
import { Images } from "constants";

const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <img src={Images.loading} alt="loading" />
    </div>
  );
};

export default Loading;
