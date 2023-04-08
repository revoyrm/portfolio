import { Job } from "@/data/experience";
import { ReactElement, useCallback, useState } from "react";
import { Collapse } from "react-collapse";

type JobHistoryItemProps = Job;

export function JobHistoryItem({
  company,
  startDate,
  endDate,
  skills,
  responsibilities,
}: JobHistoryItemProps): ReactElement {
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  return (
    <div
      className="border border-blue-200 p-4 mb-2 rounded-xl hover:cursor-pointer hover:bg-gradient-to-br hover:rom-slate-950 hover:from-40% hover:to-blue-950 hover:animate-gradient-xy"
      onClick={handleClick}
      key={company}
    >
      <div className="flex pl-2">
        <div className="text-2xl pr-4">{company}</div>
        <ul className="flex gap-x-2 flex-wrap">
          {skills.map((skill, i) => (
            <li className="pt-2" key={`${company}-${skill}`}>{`${skill}   ${
              i < skills.length - 1 ? "           -" : ""
            }`}</li>
          ))}
        </ul>
      </div>
      <p className="py-2 pl-4">{`${startDate} - ${endDate}`}</p>
      <Collapse isOpened={open}>
        <hr className="my-4 mx-1 bg-blue-200 border-0 h-px" />
        <ul className="flex flex-col gap-y-2 list-disc pl-8">
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
}
