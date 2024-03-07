import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const SideBarWrap = styled.div`
  z-index: 5;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: #e7e4e1;
  height: 100%;
  width: 55%;
  right: -55%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const Menu = styled.li`
  margin: 30px 8px;
`;

const ExitMenu = styled.span`
  position: absolute;
  bottom: 26px;
  font-size: 0.8rem;
`;

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();
  useEffect(() => {
    document.addEventListener("mousedown", handlerOutsie);
    return () => {
      document.removeEventListener("mousedown", handlerOutsie);
    };
  });
  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };
  const toggleSide = () => {
    setIsOpen(false);
  };
  return (
    <SideBarWrap id="sidebar" ref={outside} className={isOpen ? "open" : ""}>
      {" "}
      <img
        src="/img/close.png"
        alt="close"
        onClick={toggleSide}
        onKeyDown={toggleSide}
      />{" "}
      <ul>
        {" "}
        <Menu>메뉴1</Menu> <Menu>메뉴2</Menu> <Menu>메뉴3</Menu>{" "}
      </ul>{" "}
    </SideBarWrap>
  );
}
export default Sidebar;
