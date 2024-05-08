import {Art, Book} from "@/components/common";
import Link from "next/link";

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
        <Book>alohomora</Book>, breaking the mud <span className={"text-custom-c"}>
        - Publisher: <Link href={"/publishers/hotwizcorp"}>HotWiz Corp</Link> | Writer: █████████</span><br/>
        <Book>pay2wiz</Book>, casting spells <span className={"text-custom-c"}>
        - Publisher: <Link href={"/publishers/hotwizcorp"}>HotWiz Corp</Link> | Writer: █████████</span><br/>
        <Book>4rc4n3_3y3</Book>, f1nd th3 h1dd3n <span className={"text-custom-c"}>
        - Publisher: <Link href={"/publishers/nomiconcorp"}>Nomicon Corp</Link> | Writer: █████████</span><br/>

        <p className={"pt-8"}>
          <span className={"text-custom-D glow text-xl"}>:::LIBRARY COMMUNICATION:::</span>
          <br/>
          Want a book or spell in the library?<br/>
          Send <span className={"text-custom-c"}>@</span><span className={"text-custom-H"}>wizmud</span> a DM with the
          required info
          <br/><br/>
          Please provide:<br/>
          - the spell script,<br/>
          - security level,<br/>
          - a clear description<br/>
          - the cost, if any<br/>
          <br/>
          After that the information will be provided to the publishers.<br/>
          The preferred currency for spells is <span className={"text-custom-Y"}>WC</span>
        </p>
      </main>
    </>
  );
}
