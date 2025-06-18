export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [

];

export const myProjects = [
  {
    title: 'Strapi ecs deployment',
    desc: 'A production-ready deployment solution for Strapi CMS using AWS ECS, Terraform, and GitHub Actions with blue/green deployment support',
    subdesc:
      'This project showcases a step-by-step approach to deploying Strapi, a popular headless CMS, on AWS ECS using Docker containers.',
    href: 'https://github.com/DDhanavandhan/strapi_ecs_deploy',
    texture: '/textures/project/speedline.webp',
    logo: '/assets/strapi.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'AWS',
        path: '/assets/aws.png',
      },
      {
        id: 2,
        name: 'Terraform',
        path: 'assets/terraform.png',
      },
     
      {
        id: 3,
        name: 'Docker',
        path: '/assets/docker.png',
      },
      {
        id: 4,
        name: 'github actions',
        path: '/assets/githubactions.png',
      },
    ],
  },
  {
    title: 'medusa ecommerce',
    desc: 'This project implements a Medusa e-commerce headless server with automated deployment to AWS ECS using GitHub Actions and Terraform.',
    subdesc:
      'A robust eCommerce platform built with Medusa, featuring a headless architecture and customizable storefront.',
    href: 'https://github.com/DDhanavandhan/medusa_headless_server',
    texture: '/textures/project/Tekiskymart.webp',
    logo: '/assets/medusa.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'aws',
        path: '/assets/aws.png',
      },
      {
        id: 2,
        name: 'Terraform',
        path: 'assets/terraform.png',
      },
      {
        id: 3,
        name: 'docker',
        path: '/assets/docker.png',
      },
      {
        id: 4,
        name: 'github actions',
        path: '/assets/githubactions.png',
      },
      {
        id: 5,
        name: 'mongodb.js',
        path: '/assets/mongodb.png',
      },
    ],
  }
  ,
  {
    title: 'ci/cd pipeline for store',
    desc: 'This project implements a robust CI/CD pipeline for an e-commerce store, featuring infrastructure as code, containerization, and automated deployments on AWS infrastructure.',
    subdesc:
      'the technolgies used in the project were github,terraform,jenkins,sonarqube,docker,trivy,eks,promotheus,grafana.',
    href: 'https://github.com/DDhanavandhan/ci-cd-pipeline_for_store',
    texture: '/textures/project/GoGroove.webp',
    logo: '/assets/G.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'jenkins',
        path: '/assets/jenkins.png',
      },
      {
        id: 2,
        name: 'aws',
        path: 'assets/aws.png',
      },
      {
        id: 3,
        name: 'terraform',
        path: '/assets/terraform.png',
      },
      {
        id: 4,
        name: 'prometheus',
        path: '/assets/promotheus.png',
      },
      {
        id: 4,
        name: 'docker',
        path: '/assets/docker.png',
      },
      {
        id: 5,
        name: 'kubernetes',
        path: '/assets/kubernetes.png',
      },
    ],
  },
 

 
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'pearlthoughts',
    pos: 'devops engineer trainee',
    duration: 'april-may 2025',
    title: "As a DevOps Engineer Trainee at PearlThoughts, I have been actively involved in automating and deploying cloud-native applications using industry-standard DevOps tools and practices. My responsibilities included end-to-end CI/CD pipeline implementation, infrastructure provisioning, and container orchestration.",
    icon: '/assets/pearl.png',
    animation: 'victory',
  },

 
];
