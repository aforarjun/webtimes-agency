import React from "react";

interface Tag {
    text: string;
    style?: any;
    [key: string]: any;
}

function Tag({ text, style, ...props }: Tag) {
  return (
    <span className="bg-lightText dark:bg-lightText-dark px-2 py-1 text-xs rounded-lg" style={style} {...props}>
      {text}
    </span>
  );
}

export default Tag;
