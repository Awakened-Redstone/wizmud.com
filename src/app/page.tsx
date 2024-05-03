"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";

export default function Home() {
  const [isLive, setIsLive] = useState(false);
  const [sc001, setSc001] = useState(false)

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

  const hat = <>
    <div className={"leading-none tracking-tight whitespace-pre glow"} onClick={event => {
      setSc001(true)
    }}>
      {hatText}
    </div>
    <div className={"text-center pt-4"}>Hat from wiz.mud</div>
  </>

  return (
    <>
      <main className="items-center justify-between px-24 pt-8 text w-fit mx-auto text-center ">
        <div className={"text-start w-fit mx-auto"}>
          {
            sc001 && isLive ? <iframe
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
          While we work, why not play some <Link className={"text-yellow-300 underline"} href={"https://www.humblebundle.com/store/hackmud?partner=piratesoftware"}>hackmud</Link>
          <br/>
          Also checkout the <Link className={"text-yellow-300 underline"} href={"https://store.steampowered.com/news/app/469920/view/4219386527945891122"}>wiz.mud event</Link>
        </div>
      </main>
    </>
  );
}
