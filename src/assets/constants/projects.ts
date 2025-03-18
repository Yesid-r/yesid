interface Project {
    title: string;
    description: string;
    image: undefined | string;
    githubLink: string;
  }
  import task from '../img/projects/task.png'
  import ecommerce from '../img/projects/ecommerce.png'
  import courseManagement from '../img/projects/Courses_management.png'
  import ecommercemicroservices from '../img/projects/diagramaproyecto.png'
  export const projects: Project[] = [
    {
      title:"Fullstack E-commerce microservices",
      description: `
       I developed a microservices-based e-commerce platform using Spring WebFlux, Clean Architecture, and reactive programming. 
       I implemented independent services for managing products, customers, orders, and notifications, integrated asynchronously via Kafka and containerized with Docker for consistent deployments.
      `,
      image: ecommercemicroservices.src,
      githubLink: "https://github.com/Yesid-r/ecommerce-hex"
    },
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
    },{
      title: "Courses Management System",
      description: `
        I developed desktop software for course management using Java, awt y swing.
      `,
      image: courseManagement.src,
      githubLink: "https://github.com/Yesid-r/tallerFinal"
    }
  ];
  
  