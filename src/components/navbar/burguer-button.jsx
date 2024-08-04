import React from "react";
import { useSidebarContext } from "../../layouts/layout-context";
import { StyledBurgerButton } from "./navbar.styles";


export const BurguerButton = () => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <div
      // open={collapsed}
      onClick={setCollapsed}
      className={StyledBurgerButton()}
    >
      <div />
      <div />
    </div>
  );
};
