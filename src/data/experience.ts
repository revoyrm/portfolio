export type ExperienceType = {
  jobs: {
    company: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
  }[];
  school: {
    name: string;
    degree: string;
    startDate: string;
    endDate: string;
  };
  skills: {
    name: string;
    description: string;
  }[];
};

export const Experience: ExperienceType = {
  jobs: [
    {
      company: "Boost Insurance",
      startDate: "April 2022",
      endDate: "April 2023",
      responsibilities: [
        "Developed a highly customizable website for partners to easily spin up their own insurance site styled per their branding. Within just a few minutes, partners can spin up their own site that seamlessly interacts with Boost's insurance APIs.",
        "Developed an Admin site that intuitively led partners through setting up there theme.",
        "Theme Autogenerator - developed a tool that took in just a few colors and smartly generated a base theme that was responsive and interactive.",
        "Developed a postgreSQL database using TypeORM and ApolloGraphQL that stored our partner's themes and configurations.",
        "Collaborated closely with UX and product management to ensure features and designs were technically feasible and performed intuitively.",
      ],
    },
    {
      company: "Cerner Corporation",
      startDate: "September 2015",
      endDate: "April 2022",
      responsibilities: [
        "Developed a customizable web based media viewer project for hospital systems in ReactJS.",
        "This media viewer was consumable by many different applications accross Cerner, from other ReactJS projects to c++ applications.",
        "This media viewer allowed hospital workers to view, annotat, sign, and otherwise interact with any file in their system.",
        "Collaborated closely with UX and product management to ensure the viewer was intuitive while allowing all the functionality required.",
        "Collaborated with other teams across Cerner depending on our project to prioritize feature requests and ensure the integrity of the viewer.",
        "Collaborated with Cerner's internal UX library, TerraUI, to ensure our project had the tools we needed.",
      ],
    },
  ],
  school: {
    name: "Western Washington University",
    degree: "B.S. Computer Science",
    startDate: "September 2012",
    endDate: "June 2015",
  },
  skills: [
    {
      name: "ReactJS",
      description: "",
    },
    {
      name: "typeScript",
      description: "",
    },
    {
      name: "tailwindCSS",
      description: "",
    },
    {
      name: "next.JS",
      description: "",
    },
    {
      name: "graphQL",
      description: "",
    },
    {
      name: "typeORM",
      description: "",
    },
  ],
};
