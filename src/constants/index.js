import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    LTG,
    Foodmeta,
    WeatherApp,
    NoQs,
    carrent,
    jobit,
    tripguide,
    threejs,
    Internshala,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Internshala Student Partner",
      company_name: "Internshala",
      icon: Internshala,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "NoQ’s Digital",
      icon: NoQs,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Feb 2024",
      points: [
        "Mastered website structure and CMS fundamentals, significantly optimizing project delivery times by 20 hours per month through streamlined workflows and efficient resource allocation.",
        "Collaborated with a team of 6 to meticulously document processes and establish best practices, resulting in enhanced team efficiency and a more seamless onboarding process for new members.",
        "Acquired extensive hands-on experience with WordPress and various plugins, accelerating development cycles by completing projects 25% faster through advanced customization and efficient utilization of plugin functionalities.",
        "Customized, troubleshot, and integrated plugins, leading to a 40% reduction in issue resolution time and a 25% increase in overall system performance.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "LeetCode to GitHub Extension",
      description:
        "Developed a Chrome extension to sync LeetCode submissions with GitHub, using OAuth for secure updates, reducing sync time by 75%, and boosting documentation efficiency by 50%.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "OAuth",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: LTG,
      source_code_link: "https://github.com/printilu22/Leetcode-to-GitHub",
    },
    {
      name: "Food Meta",
      description:
        "Led a team of 4 to develop a food review website with advanced user authentication, ratings, reviews, and search functionalities, ensuring a faster load time and responsive design across platforms.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Foodmeta,
      source_code_link: "https://github.com/printilu22/Food-Meta",
    },
    {
      name: "Weather-App",
      description:
        "Developed a responsive weather app with real-time Weather API integration, reducing load and response times while improving performance, cross-platform compatibility, and user satisfaction.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Weather API",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: WeatherApp,
      source_code_link: "https://github.com/printilu22/Weather-App",
    },
  ];
  
  export { services, technologies, experiences, projects };