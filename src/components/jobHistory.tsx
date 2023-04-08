import { Experience } from "@/data/experience";
import { ReactElement } from "react";
import { Collapse } from "react-collapse";
import { JobHistoryItem } from "./jobHistoryItem";

export function JobHistory(): ReactElement {
  return (
    <div className="flex flex-col gap-y-6">
      {Experience.jobs.map((job) => (
        <JobHistoryItem key={job.company} {...job} />
      ))}
    </div>
  );
}
