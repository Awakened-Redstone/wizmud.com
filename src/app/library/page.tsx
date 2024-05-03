import {Art, Script} from "@/components/common";

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

        <p className={"pt-8"}>
          <span className={"text-red glow text-xl"}>:::WIZMUD.COM COMMUNICATION:::</span>
          <br/>
          Want a book or spell in the library?<br/>
          Ping <span className={"text-custom-c"}>@</span><span className={"text-custom-H"}>wizmud</span>
          &nbsp;on <span className={"text-custom-c"}>#0000</span> at the&nbsp;
          <span className={"text-custom-3"}>piratesoftware discord</span>
          <br/>
          Please provide the spell script, security level and what it does, <br/>
          &nbsp;it will be provided to the council and checked.<br/>
          The only currency a spell can use is <span className={"text-custom-Y"}>WC</span>
        </p>
      </main>
    </>
  );
}
