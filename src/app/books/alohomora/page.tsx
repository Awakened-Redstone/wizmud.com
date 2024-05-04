import {Script, WC} from "@/components/common";
import {Book as BookC} from "@/components/common";

export default function Book() {
  /*return (
    <main className={"tracking-tight"}>
      I&#39;m sorry, I can&#39;t give you this book yet, I&#39;m waiting for ████████ to authorize the books
    </main>
  );*/

  return (
    <main>
      No lock is too strong for a wizard, here you can find spells that can deal with this so called &quot;locks&quot;<br/>
      Remember to confirm the security level<br/>
      Learn how to use <WC/> at the <BookC>pay2wiz</BookC> <span className={"text-key"}>book</span>
      <br/><br/><br/>
      Speels from <Script>wiz</Script>:
      <br/><br/>
      <Script>wiz.magic_missile</Script> <span className={"text-custom-c"}>- Creator: unknown [FULLSEC] (<WC>1</WC>/cast)</span>
      <br/>
      Magic missile can crack open any magicless and soggy lock, simply cast&nbsp;
      <Script>wiz.magic_missile &#123;t1: #s.your.target&#125;</Script><br/>
      Remember to always carry some <WC/> with you when casting magic missile, as you need to charge the wand with one to cast it
      <br/><br/><br/>
      Speels from users:
      <br/><br/>
      <Script>merlin.knock</Script> <span className={"text-custom-c"}>- Creator: Merlin [FULLSEC] (<WC>2</WC>/cast)</span>
      <br/>
      Crack open multiple T1 targets with a single spell cast. This spell will cost you <WC>2</WC> (if there where any locks on the targets)<br/>
      It can be cast again with the same targets, if it couldn&#39;t finish them in the first run, and will continue where it ended.
    </main>
  );
}
