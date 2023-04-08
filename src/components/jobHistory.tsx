import { Experience } from "@/data/experience";
import { ReactElement } from "react";

export function JobHistory(): ReactElement {
  return (
    <div>
      {Experience.jobs.map(
        ({ company, startDate, endDate, responsibilities }) => (
          <div key={company}>
            <p>{company}</p>
            <p>{`${startDate} - ${endDate}`}</p>
            {responsibilities.map((responsibility) => (
              <p key={responsibility}>{responsibility}</p>
            ))}
          </div>
        )
      )}
    </div>
  );
}
