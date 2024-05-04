import {Script} from "@/components/common";

export default function Book() {
  /*return (
    <main className={"tracking-tight"}>
      I&#39;m sorry, I can&#39;t give you this book yet, I&#39;m waiting for ████████ to authorize it
    </main>
  );*/

  return (
    <main>
      Throughout the years wizards have created new and better wands to cast spells easily and fast<br/>
      Today, some spells require you to charge your want with <span className={"text-custom-Y"}>WC</span> to cast it,
      here you will find how to get and use your <span className={"text-custom-Y"}>WizCoin</span>s to wiz like the
      greatest wizards
      <br/><br/>
      To get your great <span className={"text-custom-Y"}>WC</span> use
      &nbsp;<Script>wiz.mud &#123;command:&quot;buy&quot;, amount:&quot;1WC&quot;&#125;</Script> you can also get them
      trough <Script>wiz.spellbound</Script>, the escrow system created by the council.
      <br/><br/>
      If you want to accept an escrow simply use <Script>wiz.spellbound &#123; i:&quot;xxxxxx&quot;, confirm:true &#125;</Script>
    </main>
  );
}
