import {Art} from "@/components/common";

export default function NotFound() {
  const art404: string = `
  ██╗██╗ █████╗   ██╗██╗
 ██╔╝██║██╔══██╗ ██╔╝██║
██╔╝ ██║██║  ██║██╔╝ ██║
███████║██║  ██║███████║
╚════██║╚█████╔╝╚════██║
     ╚═╝ ╚════╝      ╚═╝`
    .replace("\n", "");

  return (
    <main className={"my-auto h-full text-center flex justify-center flex-col"}>
      <Art className={"w-fit mx-auto"}>{art404}</Art>
      <p className={"pt-6"}>You seem to have landed on a <br/>place unknown to the wizards</p>
    </main>
  )
}
