interface Experience {
    date: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
  }
  
  export const experiences: Experience[] = [
    {
      date: "July 2024 - Present",
      role: "Software Architect",
      company: "Ceiba Software House",
      description: `
        I gained practical knowledge working with hexagonal architecture, design patterns, and SOLID principles, 
        as well as methodologies such as TDD (Test-Driven Development) and DDD (Domain-Driven Design). 
        Additionally, I worked with Salesforce, leveraging tools like Apex and Lightning Web Components (LWC) to 
        develop high-quality software solutions tailored to business needs.
      `,
      technologies: [
        "Java", "Junit", "Jacoco", "Gradle", "Jenkins", "Sonarqube", 
        "Git", "Gitlab", "SQL", "TDD", "DDD", "GoF", "APEX", "LWC"
      ],
    },
    {
      date: "June 2023 – September 2023",
      role: "Frontend Developer",
      company: "Aspropabelen",
      description: `
        Developed and implemented a responsive website using Hostinger, ReactJS, and Tailwind CSS, ensuring 
        optimal performance and an excellent user experience.
      `,
      technologies: ["ReactJS", "Tailwind CSS", "Hostinger"],
    },
  ];
  