import React from "react";
import { Plate } from "@udecode/plate";

function Editor() {
  // Stored in VALUES.plainText
  const editableProps = {
    placeholder: "Type…",
    style: {
      padding: "15px",
    },
  };
  const initialValue = [
    {
      children: [
        {
          text: "This is editable plain text with react and history plugins, just like a <textarea>!",
        },
      ],
    },
  ];

  return (
    <Plate id="2" editableProps={editableProps} initialValue={initialValue} />
  );
}

export default Editor;
