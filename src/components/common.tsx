"use client";

import {twMerge} from "tailwind-merge";
import React from "react";
import Link from "next/link";

export function Art({children, className}: {children: string, className?: string}) {
  return (
    <div className={twMerge("text-start leading-none tracking-tight whitespace-pre", className)}>
      {children}
    </div>
  );
}

export type ScriptParams = {
  [key: string]: string | number | null | string[] | number[]
}

export function Script({trust = false, children}: {trust?: boolean, children: string}) {
  const split = children.split(" ");
  const sections: string[] = [split.shift() as string, split.join(' ')]
  const parts = sections[0].split(".");
  const command = (
    <>
      <span className={trust ? "text-trust" : "text-username"}>{parts[0]}</span>
      {
        parts[1] && <>
          .
          <span className={"text-script"}>{parts[1]}</span>
        </>
      }
    </>
  );

  let params = <></>;

  if (split.length > 0) {
    const invalidJson = sections[1]
    const validJson = invalidJson.replace(/(\w+)(?=:)/g, '"$1"').replace(/(?<=:) ?(#\w+\.\w+\.\w+)/g, '"$1"');
    const json: ScriptParams = JSON.parse(validJson);

    const keys = Object.keys(json);

    let val = (
      <>
        &nbsp;&#123;&nbsp;
        {
          keys.map((key, index) => {
            const val = json[key]
            let parsedVal = <>{JSON.stringify(val)}</>;
            let isTarget: boolean = false;
            if (typeof val === "string" && /(#\w+\.\w+\.\w+)/g.test(val as string)) {
              const parts = val.split(".");
              const trig = parts.shift();
              const script = parts.join(".");
              parsedVal = (
                <>
                  <span>{trig}</span>
                  .
                  <Script>{script}</Script>
                </>
              )
            }

            return (
              <>
                <span className={"text-key"}>{key}</span>: <span className={"text-value"}>{parsedVal}</span>
                {
                  index < keys.length - 1 && ", "
                }
              </>
            );
          })
        }
        &nbsp;&#125;
      </>
    );

    params = val
  }

  return <>{command}{params}</>;
}

export function Book({children}: {children: string}) {
  return <Link href={`/books/${children}`} className={"text-value"}>{children}</Link>
}

export function WC({children}: {children?: string}) {
  if (children) {
    return <><span className={"text-default"}>{children}</span><span className={"text-custom-Y"}>WC</span></>;
  }
  return <span className={"text-custom-Y"}>WC</span>;
}
