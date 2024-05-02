"use client";

import Link from "next/link";
import {useEffect, useState} from "react";

export default function Home() {
  const [isLive, setIsLive] = useState(false);
  const [showStream, setShowStream] = useState(false)

  useEffect(() => {
    fetch("https://api.awakenedredstone.com/v2/twitch/is_live/piratesoftware").then(r => {
      r.json().then(value => {
        setIsLive(value.data && value.data.length > 0 && value.data[0].game_name.toLowerCase() === "hackmud");
      })
    });
  }, []);

  const hatText: string = `
                          ██
                          ████
                          ██████
                            ██████
                          ████████
                          ████████
                        ██████████
                        ██████████
                        ██████████
                      ██████████
                      ████████████
                    ████████████████
                    ████████████████
                    ████████████████
                  ████████████████████
                  ████████████████████
                  ████████████████████
                ██████            ██████
              ▓▓████                ████▓▓
            ██▓▓▓▓██    ████████    ██▓▓▓▓██
      ████████▓▓▓▓▓▓    ▓▓▓▓▓▓▓▓    ▓▓▓▓▓▓████████
  ██████████████▓▓▓▓    ▓▓▓▓▓▓▓▓    ▓▓▓▓██████████████
████████████████████                ████████████████████
██████████████████████            ██████████████████████
  ████████████████████████████████████████████████████
        ████████████████████████████████████████
                ████████████████████████`
    .replace("\n", "")

  const hat = <code>
    <div className={"leading-none tracking-tight whitespace-pre"}>
      {hatText}
    </div>
    <div className={"text-center pt-4"}>Hat from wiz.mud</div>
  </code>

  return (
    <>
      <main className="min-h-[87vh] items-center justify-between px-24 pt-8 text w-fit mx-auto text-center ">
        <div className={"text-start w-fit mx-auto"} onClick={event => {
          if (isLive) {
            setShowStream(true)
          }
        }}>
          {
            showStream ? <iframe
              src="https://player.twitch.tv/?channel=piratesoftware&parent=localhost&parent=wizmud.com&height=540"
              width="960"
              height="540"
              allowFullScreen/> : hat
          }
        </div>
        <div className={"text-red-500 text-xl pt-4 pb-4"}>
          The wizards are hard at work casting web magic
        </div>
        <div className={"text-xl"}>
          While we work, why not play some <Link className={"text-yellow-300 underline"}
                                                 href={"https://www.humblebundle.com/store/hackmud?partner=piratesoftware"}>hackmud</Link>
          <br/>
          Also checkout the <Link className={"text-yellow-300 underline"}
                                  href={"https://store.steampowered.com/news/app/469920/view/4219386527945891122"}>wiz.mud
          event</Link>
        </div>

        <div className={"text-orange-400 text-xl pt-14"}>
          We hope to bring wizards the knowledge of the<br/>discovered spells and when/how to use them
        </div>
      </main>
      <footer className={"flex flex-col items-center justify-between pb-6 text-center glow tracking-normal trust"}>
        <div className={"text-4xl"}>:::TRUST COMMUNICATION:::</div>
        This website is NOT associated or owned by hackmud or PirateSoftware
      </footer>
    </>
  );
}
