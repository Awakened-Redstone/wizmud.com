import {twMerge} from "tailwind-merge";
import React from "react";

export function Art({children, className}: {children: string, className?: string}) {
  return (
    <div className={twMerge("text-start leading-none tracking-tight whitespace-pre", className)}>
      {children}
    </div>
  );
}

export function Script({trust = false, children}: {trust?: boolean, children: string}) {
  const parts = children.split(".");
  return (
    <>
      <span className={trust ? "text-trust" : "text-username"}>{parts[0]}</span>
      .
      <span className={"text-script"}>{parts[1]}</span>
    </>
  )
}
