import {Art} from "@/components/common";

export default function Corp() {
  return (
    <main>
      <Art className={"pb-6"}>{`\
 __  __  _____   ______  __      __  ______  ________      ____     _____   ____    ____    
/\\ \\/\\ \\/\\  __\`\\/\\__  _\\/\\ \\  __/\\ \\/\\__  _\\/\\_____  \\    /\\  _\`\\  /\\  __\`\\/\\  _\`\\ /\\  _\`\\  
\\ \\ \\_\\ \\ \\ \\/\\ \\/_/\\ \\/\\ \\ \\/\\ \\ \\ \\/_/\\ \\/\\/____//'/'   \\ \\ \\/\\_\\\\ \\ \\/\\ \\ \\ \\L\\ \\ \\ \\L\\ \\
 \\ \\  _  \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\     //'/'     \\ \\ \\/_/_\\ \\ \\ \\ \\ \\ ,  /\\ \\ ,__/
  \\ \\ \\ \\ \\ \\ \\_\\ \\ \\ \\ \\ \\ \\ \\_/ \\_\\ \\ \\_\\ \\__ //'/'___    \\ \\ \\L\\ \\\\ \\ \\_\\ \\ \\ \\\\ \\\\ \\ \\/ 
   \\ \\_\\ \\_\\ \\_____\\ \\ \\_\\ \\ \`\\___x___/ /\\_____\\/\\_______\\   \\ \\____/ \\ \\_____\\ \\_\\ \\_\\ \\_\\ 
    \\/_/\\/_/\\/_____/  \\/_/  '\\/__//__/  \\/_____/\\/_______/    \\/___/   \\/_____/\\/_/\\/ /\\/_/ \
`}</Art>
      Publications:<br/>
      alohomora, breaking the mud <span className={"text-custom-c"}>- Note: creative book names wizard was sick at day of publication</span><br/>
      pay2wiz, casting spells<br/>
    </main>
  );
}
