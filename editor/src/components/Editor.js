import React from "react";
import { Plate } from "@udecode/plate";

function Editor() {
  const editableProps = {
    placeholder: "Type…",
    style: {
      padding: "15px",
    },
  };

  return <Plate id="1" editableProps={editableProps} />;
}

export default Editor;
