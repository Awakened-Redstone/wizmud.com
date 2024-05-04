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

  const hatText: string = `\
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

  const ws0002 = (
    <div className={"absolute top-[16rem] right-[-2rem] text-custom-5 glow leading-none"}>
      &lt;-- Wear the hat
    </div>
  );

  const hat = <div className={"relative"}>
    <div className={"leading-none tracking-tight whitespace-pre"} onClick={event => {
      setSc001(true)
    }}>
      {hatText}
    </div>
    <div className={"text-center pt-4"}>Hat from <Script>wiz.mud</Script></div>
    {
      isLive && ws0002
    }
  </div>

  return (
    <>
      <main className="p-4">
        <div className={"text-start w-fit"}>
          {
            sc001 && isLive ? <iframe
              src="https://player.twitch.tv/?channel=piratesoftware&parent=localhost&parent=wizmud.com&height=540"
              width="960"
              height="540"
              allowFullScreen/> : hat
          }
        </div>
        <div className={"text-xl pt-4 pb-4"}>
          Welcome to wizmud public script. Please refrain from engaging in criminal activity.<br/>
          <Link href={"/library"} className={"text-script"}>library</Link> |  ¨ª¢©¦Ã¤ª¦
        </div>
        <div>
          The wizards are sorry for taking the domain from <Script>wiz.mud</Script><br/>
        </div>
      </main>
    </>
  );
}
