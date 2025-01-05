interface Project {
    title: string;
    description: string;
    image: undefined | string;
    githubLink: string;
  }
  import task from '../img/projects/task.png'
  import ecommerce from '../img/projects/ecommerce.png'
  export const projects: Project[] = [
    {
      title: "Task Management System",
      description: `
        I developed a web application for task management using React, Node.js, and MongoDB. 
        I implemented JWT authentication to ensure user security.
      `,
      image: task.src, 
      githubLink: "https://github.com/Yesid-r/TaskProject"
    },
    {
      title: "Fullstack E-commerce",
      description: `
        I created an e-commerce platform using React, Express, and PostgreSQL. 
        I implemented a secure payment system with payment gateway integration.
      `,
      image: ecommerce.src, 
      githubLink: "https://github.com/Yesid-r/backend_ecommerce_nodejs_prisma", 
    }
  ];
  
  