import {Art, Script} from "@/components/common";
import Link from "next/link";

function Book({children}: {children: string}) {
  return <Link href={`/books/${children}`} className={"text-value"}>{children}</Link>
}

export default function Library() {
  /*return (
    <main className={"tracking-tight"}>
      ████████ haven&#39;t yet allowed access to the library, sorry...
    </main>
  );*/

  const bookText: string = `\
██████╗  █████╗  █████╗ ██╗  ██╗ ██████╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝██╔════╝
██████╦╝██║  ██║██║  ██║█████═╝ ╚█████╗
██╔══██╗██║  ██║██║  ██║██╔═██╗  ╚═══██╗
██████╦╝╚█████╔╝╚█████╔╝██║ ╚██╗██████╔╝
╚═════╝  ╚════╝  ╚════╝ ╚═╝  ╚═╝╚═════╝`;

  return (
    <>
      <main>
        <span className={"flex"}>
          <Art className={"text-key"}>{bookText}</Art>
        </span>
        <Book>alohomora</Book>, br34k1ng th3 mud <span className={"text-custom-c"}>- Publisher: <Link href={"/publishers/nomiconcorp"}>Nomicon Corp</Link> | Writer: █████████</span><br/>
        <Book>pay2wiz</Book>, casting spells <span className={"text-custom-c"}>- Publisher: <Link href={"/publishers/hotwizcorp"}>HotWiz Corp</Link> | Writer: █████████</span>

        <p className={"pt-8"}>
          <span className={"text-red glow text-xl"}>:::LIBRARY COMMUNICATION:::</span>
          <br/>
          Want a book or spell in the library?<br/>
          Ping <span className={"text-custom-c"}>@</span><span className={"text-custom-H"}>wizmud</span>
          &nbsp;on <span className={"text-custom-c"}>#0000</span> at the&nbsp;
          <span className={"text-custom-3"}>piratesoftware discord</span>
          <br/>
          Please provide the spell script, security level and what it does, <br/>
          &nbsp;after that the information will be provided to the publishers.<br/>
          Spells that use a currency other than <span className={"text-custom-Y"}>WC</span> will likely be rejected
        </p>
      </main>
    </>
  );
}
