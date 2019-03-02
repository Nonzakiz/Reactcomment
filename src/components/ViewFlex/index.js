import React from "react";
import classnames from "classnames";
import "./styles.scss";

function ViewFlex({ children, fluid = false, className,column,row}) {
  return <div className={classnames("view", { fluid },className)}>{children}</div>;
}

export default ViewFlex;