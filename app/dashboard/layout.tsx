import React, { Children } from "react";
import Header from "../_components/Header";

type ContainerProps = {
  children: React.ReactNode;
};
const DashBoardLayout: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DashBoardLayout;
