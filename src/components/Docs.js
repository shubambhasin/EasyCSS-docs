import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Docs = () => {
  const DocsTitle = styled.span`
    font-size: 5rem;
    font-weight: lighter;
    text-align: center;
    width: 70%;
    margin: 0 auto;
  `;
  return (
    <div className="docs-page">
    

      <div className="docs-title">
        <DocsTitle className="docs-title">Lets get started !</DocsTitle>
      </div>
    </div>
  );
};

export default Docs;
