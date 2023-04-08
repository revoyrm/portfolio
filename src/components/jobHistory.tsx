import { Experience } from "@/data/experience";
import { ReactElement } from "react";

export function JobHistory(): ReactElement {
  return (
    <div>
      {Experience.jobs.map(
        ({ company, startDate, endDate, skills, responsibilities }) => (
          <div
            className="border border-blue-200 p-4 mb-2 rounded-xl"
            key={company}
          >
            <ul className="flex gap-x-2">
              <li className="text-2xl pr-4">{company}</li>
              {skills.map((skill, i) => (
                <li className="pt-2" key={`${company}-${skill}`}>{`${skill}   ${
                  i < skills.length - 1 ? "           -" : ""
                }`}</li>
              ))}
            </ul>
            <p className="py-2">{`${startDate} - ${endDate}`}</p>
            <ul className="flex flex-col gap-y-2">
              {responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}
