import React from "react";
import "./index.scss";

interface ResultTagProps {
  type: "c" | "l" | "t" | "k";
}
function ResultTag({ type }: ResultTagProps) {
  if (type)
    return (
      <span className="result-tag">
        <span className="label label-warning text-uppercase">Cung</span>
      </span>
    );
}

export default ResultTag;
