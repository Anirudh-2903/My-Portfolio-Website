
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
    orchestrate,
    nexus,
    synapse_hub,
    bubble,
    aws,
    gcp,
    azure,
    hlf,
    aspnet,
    csharp,
    python,
    vb,
    deepak,
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
        "Anirudh's expertise with Bubble.io was pivotal for Reclimate. His rapid mastery of the platform and seamless API development were crucial in delivering key features swiftly.He consistently showcased strong problem-solving skills and a collaborative attitude, seamlessly integrating feedback to deliver high-quality results within the given timeframe.",
      name: "Poorvi Agarwal",
      designation: "CTO & Co-Founder",
      company: "Reclimate",
      image: "https://media.licdn.com/dms/image/C4E03AQGPu0Olw60iUA/profile-displayphoto-shrink_400_400/0/1586928166450?e=1718841600&v=beta&t=S3d6d7zzYfk0U1uoGkJ3BHA14TTuJtM2FTtit2cP4Qg",
    },
    {
      testimonial:
        "Working with Anirudh during his internship has been an absolute pleasure. His keen attention to detail and proactive approach were evident in the successful completion of the sitemap-based Tree View landing page project.Anirudh's ability to grasp concepts quickly and his willingness to tackle challenges  greatly contributed to the project's success.",
      name: "Deepak Pal",
      designation: "Manager -  Systems",
      company: "NALCO",
      image: deepak,
    },
  ];

  const projects = [
    {
      name: "Nexus",
      description:
        "Nexus  is a Full Stack Video Conferencing App integrated with getStream which redefines video conferencing with a powerful blend of user-friendly features and cutting-edge technology. Securely log in with Clerk, quickly launch meetings, and enjoy intuitive controls over video, audio, and screen sharing. Create your own personalized meeting space with a unique link, accessible anytime. Manage participants, record meetings, and access past sessions with ease.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "getStream",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "orange-text-gradient",
        }
      ],
      image: nexus,
      source_code_link1: "https://github.com/Anirudh-2903/nexus",
      source_code_link2: "https://nexus.anirudh-das.in/",
    },
    {
      name: "Synapse Hub",
      description:
        "Synapse Hub is a Full Stack Ecommerce App integrated with Payload CMS.With a user-friendly admin interface powered by Payload CMS, you can easily add, edit, and remove products, keeping your inventory up-to-date effortlessly. Track orders and manage their status through the intuitive dashboard, ensuring smooth operations. User authentication allows customers to create accounts, log in, and manage their profile information securely.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "payload_cms",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "orange-text-gradient",
        }
      ],
      image: synapse_hub,
      source_code_link1: "https://github.com/Anirudh-2903/synapse-hub",
      source_code_link2: "https://error-not-found.my.canva.site/error",
    },
    {
      name: "Orchestrate",
      description:
        "A comprehensive, full-stack platform for managing events.Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.",
      tags: [
        {
          name: "nextjs",
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
        {
          name: "stripe",
          color: "orange-text-gradient",
        }
      ],
      image: orchestrate,
      source_code_link1: "https://github.com/Anirudh-2903/Orchestrate",
      source_code_link2: "https://orchestrate.anirudh-das.in/",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };