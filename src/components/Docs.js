import React, { useEffect } from "react";
import styled from "styled-components";
import { useSidebar } from "../context/sidebarContext";
// import Sidebar from "./Sidebar";

const DocsTitle = styled.span`
font-size: 5rem;
font-weight: lighter;
text-align: center;
width: 70%;
margin: 0 auto;
`;

const Docs = () => {

  const {sidebar, setSidebar, brand,  setBrand} = useSidebar()

  useEffect(() => {

   setTimeout(() => {
    setSidebar(true)
    setBrand(true)
   }, 500)

  }, [])




 

  return (
    <div className="docs-page anim-fadeIn-03s">
    

      <div className="docs-title">
        <DocsTitle className="docs-title">Lets get started !</DocsTitle>
      </div>
    </div>
  );
};

export default Docs;
