import { Routes } from "@/routes";
import { ReactElement } from "react";
import { HeaderLink } from "./headerLink";

export function Header(): ReactElement {
  return (
    <div className="w-full h-24 flex justify-between items-center fixed bg-gradient-to-br from-slate-950 from-40% to-blue-950 pr-32">
      <a
        href={Routes.Home}
        className="pl-8 text-2xl hover:text-slate-400 active:text-slate-600"
      >
        Mackenzie Revoyr
      </a>
      <div className="flex gap-x-4">
        <HeaderLink label="Experience" route={Routes.Experience} />
        <HeaderLink label="About Me" route={Routes.AboutMe} />
      </div>
    </div>
  );
}
