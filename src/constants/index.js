
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    next,
    // meta,
    finglo,
    reclimate,
    nalco,
    carrent,
    jobit,
    tripguide,
    bubble,
    aws,
    gcp,
    azure,
    hlf,
    aspnet,
    csharp,
    python,
    vb,
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Cloud Architect",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "DevOps Engineer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];

  const technologies = [
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Google Cloud",
      icon: gcp,
    },
    {
      name: "Microsoft Azure",
      icon: azure,
    },
    {
      name: "Hyperledger Fabric",
      icon: hlf,
    },
    {
      name: "Microsoft ASP.NET",
      icon: aspnet,
    },
    {
      name: "C-Sharp",
      icon: csharp,
    },
    {
      name: "Visual Basic.NET",
      icon: vb,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "bubble.io",
      icon: bubble,
    },
  ];

  const experiences = [
    {
      title: "SDE Associate",
      company_name: "Fintract Global",
      icon: finglo,
      iconBg: "#383E56",
      date: "January 2023 - October 2023",
      points: [
        "Constructed effective and scalable cloud solutions in AWS-Cloud using EC2 , S3 , Route 53 and Lambda.",
        "Manufactured a Hyperledger Fabric Server using Go in Microsoft Azure in local environment for research and innovation.",
        "Performed integral contributions to projects involving Banking & Blockchain in AWS Cloud & Microsoft Azure ; Email Servers and Blockchain Servers(Hyperledger Fabric) in local environment.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Reclimate",
      icon: reclimate,
      iconBg: "#E6DEDD",
      date: "March 2023 - September 2023",
      points: [
        "Developed and maintained brand new web applications using Bubble.io.",
        "Collaborated with the product team to translate business requirements into technical solutions.",
        "Constructed clean, efficient, and well-documented code and workflows resulting in increased efficiency of the web application by 20%.",
        "Built a fully functional API integrated backend system for a web application from scratch which led to decreased loading times by a factor of 17.6%.",
      ],
    },
    {
      title: "Project Intern - Corporate Systems",
      company_name: "National Aluminium Company Limited - NALCO",
      icon: nalco,
      iconBg: "#383E56",
      date: "January 2024 - April 2024",
      points: [
        "Contributed to NALCO's dynamic intranet landing page project, spanning front-end development, back-end coding, and sitemap data manipulation.",
        "Utilized UI/UX design principles for ASP.NET Web Forms to create a user-friendly interface.",
        "Collaborated with colleagues to integrate front-end elements with VB.NET code for dynamic data processing.",
        "Worked effectively across front-end development ,back-end coding, and data management tasks to foster a cohesive connection between the visual elements, the data processing logic, and the core functionality of the landing page.",
        "Deciphered and manipulated NALCO's sitemap data to ensure accurate content on the landing page.",
        "Laid groundwork for future functionalities like role-based content delivery through data manipulation.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };