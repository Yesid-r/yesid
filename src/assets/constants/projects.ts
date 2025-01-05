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
      title: "Sistema de Gestión de Tareas",
      description: `
        Desarrollé una aplicación web de gestión de tareas utilizando React, Node.js y MongoDB. 
        Implementé autenticación JWT para garantizar la seguridad de los usuarios.
      `,
      image: task.src, 
      githubLink: "https://github.com/Yesid-r/TaskProject"
    },
    {
      title: "E-commerce Fullstack",
      description: `
        Creé una plataforma de comercio electrónico utilizando React, Express y PostgreSQL. 
        Implementé un sistema de pago seguro con integración de pasarelas de pago.
      `,
      image: ecommerce.src, 
      githubLink: "https://github.com/Yesid-r/backend_ecommerce_nodejs_prisma", 
    },
    {
      title: "Dashboard Analítico",
      description: `
        Diseñé e implementé un dashboard interactivo para visualización de datos utilizando React y D3.js. 
        Incorporé filtros dinámicos y gráficos personalizados.
      `,
      image: "/images/analytics-dashboard.png",
      githubLink: "https://github.com/tuusuario/repo-dashboard",
    },
  ];
  