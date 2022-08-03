import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Menu from "./Menu";

const useScript = (url, i) => {
  useEffect(() => {
    const script = document.createElement("script" + i);

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, i]);
};

const Base = ({
  title = "My title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu></Menu>
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer class="ftco-footer bg-light ftco-section">
        
      </footer>
    </div>
  );
};

export default Base;
