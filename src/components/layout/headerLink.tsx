import { ReactElement } from "react";
import { Routes } from "../../routes";

type HeaderLinkProps = {
  label: string;
  route: Routes;
};

export function HeaderLink({ label, route }: HeaderLinkProps): ReactElement {
  return (
    <a
      className="text-xl hover:text-slate-400 active:text-slate-600"
      href={route}
    >
      {label}
    </a>
  );
}
