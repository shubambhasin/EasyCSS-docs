// import React from "react";
// import { Route, Switch } from "react-router";
// import { Link } from "react-router-dom";
// import { Buttons } from "./library/Buttons";
// import "../style.css"

// export default function Sidebar() {
//   return (
//     <Switch>

//     <div>
//       <div className="left-sidebar">
//         <h1 className="title">Ease.CSS</h1>
//         <div className="features">
//           <ul>
//             <li>Avatar</li>
//             <li>Alert</li>
//             <li>
//               Badge
//               <ul>
//                 <li>Badge on Icons</li>
//                 <li>Badge on Avatars</li>
//               </ul>
//             </li>
//             <li>
//               <Link to="/buttons">Buttons</Link>
//               <ul>
//                 <li>Primary</li>
//                 <li>Secondary</li>
//                 <li>Link</li>
//                 <li>Icon Button</li>
//                 <li>Floating Button</li>
//               </ul>
//             </li>
//             <li>
//               Card
//               <ul>
//                 <li>Card with badges</li>
//                 <li>Card with dismiss</li>
//                 <li>Card with text overlay</li>
//                 <li>Text only Cards</li>
//                 <li>Vertical Cards</li>
//                 <li>Horizontal Cards</li>
//                 <li>Cards with shadow</li>
//               </ul>
//             </li>
//             <li>
//               image
//               <ul>
//                 <li>Responsive image</li>
//                 <li>Round image</li>
//               </ul>
//             </li>
//             <li>
//               Input
//               <ul>
//                 <li>Textbox</li>
//                 <li>Inputs with error handling</li>
//               </ul>
//             </li>
//             <li>Lists</li>
//             <li>
//               Navigation
//               <ul>
//                 <li>Desktop</li>
//                 <li>Submenus</li>
//                 <li>Hamburger</li>
//               </ul>
//             </li>
//             <li>Modal</li>
//             <li>Ratings</li>
//             <li>Slider</li>
//             <li>
//               Simplified Grid
//               <ul>
//                 <li>grid-2</li>
//                 <li>grid-3</li>
//               </ul>
//             </li>
//             <li>
//               Test Utilities
//               <ul>
//                 <li>Heading</li>
//                 <li>small text</li>
//                 <li>gray text</li>
//                 <li>center text</li>
//               </ul>
//             </li>
//             <li>Toast/Notifier</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     </Switch>
//   );
// }
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import Submenu from "./Submenu";
import { IconContext } from "react-icons/lib";
const Nav = styled.div`
  background: black;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: black;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 250ms;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
    <IconContext.Provider value = {{color: "red"}}>
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} size={28} />
        </NavIcon>
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
