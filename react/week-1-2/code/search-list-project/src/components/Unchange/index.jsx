import React, { memo } from "react";

const Unchange = () => {
  console.log("Updated");
  return <div>Unchange</div>;
};
export default memo(Unchange);
