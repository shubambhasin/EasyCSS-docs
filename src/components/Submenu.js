import React, { useState } from "react";
// import { icons } from "react-icons/lib";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: flex-start;
  aling-items: center;
  padding: 1.2rem;
  list-style: none;
  height: 60px;
  font-size 1rem;
  border-left: 4px solid transparent;
text-decoration: none;
  &:hover {
      background: black;
      border-left: 4px solid white;
      cursor: pointer;
  }
`;

const Sidebarlabel = styled.span`
  color: white;
  margin-left: 1rem;
`;

const DropdownLink = styled(HashLink)`

border-right: 5px solid transparent;
background: black;
display: flex;
justify-content: center;
align-item: center;
height: 45px;
color: black
transition: 0.3s ease-in-out;
font-size: 1rem;
text-decoration: none;
padding: 1rem;
transition: height 1s;
&:hover{

    background: red;
    border-right: 5px solid white;

}


`;

const Submenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div>
      <SidebarLink to={item.path}>
        <div>
          {item.icon}
          <Sidebarlabel>{item.title}</Sidebarlabel>
        </div>
        <div style={{ marginLeft: "auto" }} onClick={item.subNav && showSubnav}>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (

              <DropdownLink to={item.hashlink}>
                {item.icon}
                <Sidebarlabel>{item.title}</Sidebarlabel>
              </DropdownLink>

          );
        })}
    </div>
  );
};

export default Submenu;
