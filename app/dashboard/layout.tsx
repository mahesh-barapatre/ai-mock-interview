import React, { Children } from "react";

type ContainerProps = {
  children: React.ReactNode;
};
const DashBoardLayout: React.FC<ContainerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default DashBoardLayout;
