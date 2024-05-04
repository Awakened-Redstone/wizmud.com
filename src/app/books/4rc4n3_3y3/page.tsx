import {Book as BookC, Script, WC} from "@/components/common";

export default function Book() {
  return (
    <main>
      You may try to hide from the wizards, but they will find you, here you will find spells to find those who try to hide<br/>
      Remember to confirm the security level<br/>
      Learn how to use <WC/> at the <BookC>pay2wiz</BookC> <span className={"text-key"}>book</span>
      <br/><br/><br/>
      Spells from users:
      <br/><br/>
      <Script>griphon.scout</Script> <span className={"text-custom-c"}>- Creator: Darkwood Menagerie [FULLSEC] (<WC>1</WC>/day - 1st day free)</span>
      <br/>
      You can send one of the griphons of the Darkwood Menagerie to scout out a public corp to find some T1 locs using <Script>griphon.scout</Script>.<br/>
      It has multiple commands,<Script>griphon.scout &#123;list:true&#125;</Script> to get a list of corps the griphons
      are trained on, <Script>griphon.scout &#123;corp:&quot;corp&quot;&#125;</Script><br/>
      to target a specific corp and <Script>griphon.scout &#123;random:true&#125;</Script> to have the griphons target a random corp.

    </main>
  )
}
