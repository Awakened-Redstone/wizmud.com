import {Art} from "@/components/common";

export default function Library() {
  /*return (
    <main className={"tracking-tight"}>
      ████████ haven&#39;t yet allowed access to the library, sorry...
    </main>
  );*/

  const bookText: string = `
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
        <span className={"text-value"}>alohomora</span>, br34k1ng th3 mud <span className={"text-custom-c"}>- Publisher: Tower Corp | Writer: █████████</span><br/>
        <span className={"text-value"}>pay2wiz</span>, c4st1ng sp3lls <span className={"text-custom-c"}>- Publisher: Tower Corp | Writer: █████████</span>
      </main>
    </>
  );
}
