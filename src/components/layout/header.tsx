import { ReactElement } from "react";

export function Header(): ReactElement {
  return (
    <div className="w-full h-24 flex justify-between items-center fixed bg-gradient-to-br from-slate-950 from-40% to-blue-950">
      <h1 className="pl-8 text-2xl">Mackenzie Revoyr</h1>
    </div>
  );
}
