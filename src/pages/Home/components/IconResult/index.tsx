import React, { useMemo } from "react";
import "./index.scss";

interface IconResultProps {
  type: "c" | "d" | "t" | "k";
}

function IconResult({ type }: IconResultProps) {
  const label = useMemo(() => {
    if (type === "c") return "label-warning";
    if (type === "d") return "label-info";
    if (type === "t") return "label-success";
    if (type === "k") return "label-danger";
  }, [type]);
  return (
    <span className={`mini-result ${label}`}>
      <span>{type}</span>
    </span>
  );
}

export default IconResult;
