import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
import { IconContext } from "react-icons/lib";
import { useSidebar } from "../context/sidebarContext";
import logo from './images/logo.png'

const Nav = styled.div`
  background: black;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  margin-bottom: 3rem;
  z-index: 10000;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;

const SidebarNav = styled.nav`
  background: black;
  width: 250px;
  max-width: 350px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-350px")};
  transition: 250ms;
  z-index: 10;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const SidebarWrap = styled.div`
  width: 100%;
`;

const Brand = styled.div`
  // text-align: center;
  color: white;
  display: ${({brand}) => (brand === true ? "flex" : "none")};
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  width: 100%;
  margin-right: 2rem;
`;

const Sidebar = () => {
  const { sidebar, setSidebar, brand, setBrand } = useSidebar();
  
  const showSidebar = () => {
    setSidebar(!sidebar);
  };


  return (
    <>
      <IconContext.Provider value={{ color: "red" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} size={28} />
          </NavIcon>
          <Brand brand={brand}>
            {/* <img src={logo} alt="logo"/> */}
            <h3 className="h3">EaseCSS</h3>
          </Brand>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <FaIcons.FaTimes onClick={showSidebar} size={28} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <Submenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
