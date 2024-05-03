"use client";

import Link from "next/link";
import {useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";
import {Script} from "@/components/common";

export default function Home() {
  const [isLive, setIsLive] = useState(false);
  const [sc001, setSc001] = useState(false)

  useEffect(() => {
    fetch("https://api.awakenedredstone.com/v2/twitch/is_live/piratesoftware").then(r => {
      r.json().then(value => {
        setIsLive(value.data && value.data.length > 0 && (value.data[0].game_name.toLowerCase() === "hackmud" || value.data[0].game_name.toLowerCase() === "software and game development"));
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
    <div className={"text-center pt-4"}>Hat from <Script>wiz.mud</Script></div>
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
          The <span className={"text-script"}>library</span> is still being build, but is now open
        </div>
        <div className={"text-xl"}>
          While we work, why not play some <Link className={"text-custom-H underline"}
                                                 href={"https://www.humblebundle.com/store/hackmud?partner=piratesoftware"}>hackmud</Link>
          <br/>
          Also checkout the <Link className={"text-custom-H underline"}
                                  href={"https://store.steampowered.com/news/app/469920/view/4219386527945891122"}>wiz.mud
          event</Link>
        </div>
        <p className={"pt-8"}>
          <span className={"text-red glow text-xl"}>:::███████ COMMUNICATION:::</span>
          <br/>
          Th3 w1z4rd5 0f <Script>wizmud.com</Script> w0uld
          <br/>
          l0v3 t0 w0rk w1th <Script>wiz.mud</Script>
        </p>
      </main>
    </>
  );
}
