import React from "react";

/*export function Script({trust = false, children}: {trust?: boolean, children: string}) {
  const parts = children.split(".");
  return (
    <>
      <span className={trust ? "text-trust" : "text-username"}>{parts[0]}</span>
      .
      <span className={"text-script"}>{parts[1]}</span>
    </>
  )
}*/

export default function Library() {
  return (
    <main>
      ████████ haven&#39;t yet allowed access to the library, sorry...
    </main>
  );

  /*const bookText: string = `
██████╗  █████╗  █████╗ ██╗  ██╗ ██████╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝██╔════╝
██████╦╝██║  ██║██║  ██║█████═╝ ╚█████╗
██╔══██╗██║  ██║██║  ██║██╔═██╗  ╚═══██╗
██████╦╝╚█████╔╝╚█████╔╝██║ ╚██╗██████╔╝
╚═════╝  ╚════╝  ╚════╝ ╚═╝  ╚═╝╚═════╝`
    .replace("\n", "");

  return (
    <>
      <main>
        <span className={"flex"}>
          <Art className={"text-key"}>{bookText}</Art>
        </span>
        Casting <span className={"text-value"}>alohomora</span>
      </main>
    </>
  );*/
}
