import { JobHistory } from "@/components/jobHistory";
import { ReactElement } from "react";

export default function Experience(): ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-slate-950 from-40% to-blue-950 justify-center sm:p-24 p-4">
      <JobHistory />
    </main>
  );
}
