
import React from "react";

export const wrapWithLink = (url: string | undefined, children: React.ReactNode, id: string) => {
  if (!url) return <>{children}</>;
  return <a href={url} key={id} >{children}</a>;
};
