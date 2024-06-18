import React from "react";
import "./index.scss";

interface ResultTagProps {
  type: "c" | "d" | "t" | "k";
}
function ResultTag({ type }: ResultTagProps) {
  if (type == "c")
    return (
      <span className="result-tag">
        <span className="label label-warning text-uppercase">Cung</span>
      </span>
    );

  if (type == "d")
    return (
      <span className="result-tag">
        <span className="label label-info text-uppercase">Đao</span>
      </span>
    );

  if (type == "t")
    return (
      <span className="result-tag">
        <span className="label label-success text-uppercase">Tiêu</span>
      </span>
    );

  if (type == "k")
    return (
      <span className="result-tag">
        <span className="label label-danger text-uppercase">Kiếm</span>
      </span>
    );
}

export default ResultTag;
