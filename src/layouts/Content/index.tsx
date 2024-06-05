import "./index.scss";

import React from "react";

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="root-container">
      <div className="content">
        <div className="content-children">{children}</div>
      </div>
    </div>
  );
}

export default Content;
