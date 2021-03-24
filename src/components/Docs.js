import React, { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import styled from "styled-components";
import { useSidebar } from "../context/sidebarContext";
// import Sidebar from "./Sidebar";

const DocsTitle = styled.span`
  font-size: 4rem;
  font-weight: lighter;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  padding: 0;
`;

const Docs = () => {
  const { sidebar, setSidebar, brand, setBrand, setStar } = useSidebar();

  useEffect(() => {
    setTimeout(() => {
      setSidebar(true);
      setBrand(true);
    }, 500);
  }, []);

  return (
    <div className="docs-page anim-fadeIn-03s">
      <div className="docs-title">
        <DocsTitle className="docs-title">Lets get started !</DocsTitle>

        <h4 className="h4 mtb1-rem">Just import the URL in your CSS file</h4>
        <SyntaxHighlighter
          language="css"
          style={dracula}
        >{`https://url.com/ease.css`}</SyntaxHighlighter>
        
        <h4 className="h4 mtb1-rem">
        Javascript file, import it in your JS directory
</h4>
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
        >{`https://url.com/ease.js`}</SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Docs;
