import {InlineCode} from "@/once-ui/components";

const person = {
  firstName: "Tobias",
  lastName: "Reuß",
  birthday: new Date("2005-02-03"),
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  get age() {
    let alter = new Date().getFullYear() - this.birthday.getFullYear();
    const m = new Date().getMonth() - this.birthday.getMonth();

    if (m < 0 || (m === 0 && birthday.getDate() < this.birthday.getDate())) {
      alter--;
    }
    return alter;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Berlin", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["German", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/smarterToby",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tobiasreuss",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/smarterToby",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contact@tobiasreuss.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I'm {person.firstName}, a Software Engineer at <InlineCode>IBM</InlineCode>, where I craft intuitive
      <br/> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a {person.age}-year-old software engineer from Germany, deeply passionate about coding and
        the continuous
        pursuit of knowledge. His focus is on staying at the forefront of technology by learning new languages,
        frameworks, and tools to refine my skill set and deliver efficient, scalable solutions. He's always eager to
        take on new challenges that push the boundaries of his expertise.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "IBM",
        timeframe: "2024 - Present",
        role: "Cloud Application Developer",
        achievements: [
          <>
            Developing and maintaining cloud-based applications for clients in the financial industry, with a focus on
            clean architecture, performance, and reliability.
          </>,
          <>
            Collaborating closely with cross-functional teams to deliver secure and scalable software solutions tailored
            to client needs.
          </>,
        ],
        images: [],
      },
      {
        company: "NÜRNBERGER Versicherung",
        timeframe: "2021 - 2024",
        role: "Apprenticeship as a Software Developer",
        achievements: [
          <>
            Worked as a fullstack developer during the apprenticeship, building, maintaining, and deploying several
            cloud-based applications across various departments.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "State Vocational College III",
        description: <>Studied software engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Java",
        description: "Proficient in Java for backend development and enterprise applications.",
      },
      {
        title: "Spring",
        description: "Experienced in building scalable web applications using Spring Boot.",
      },
      {
        title: "TypeScript",
        description: "Writing clean, type-safe code for robust frontend and backend systems.",
      },
      {
        title: "Angular",
        description: "Developing dynamic, enterprise-level SPAs with Angular.",
      },
      {
        title: "React w/Next.js",
        description: "Creating modern, server-rendered React apps using Next.js.",
      },
      {
        title: "AWS",
        description: "Deploying and managing cloud infrastructure with AWS services.",
      },
      {
        title: "Kubernetes",
        description: "Orchestrating containerized applications with Kubernetes.",
      },
      {
        title: "Docker",
        description: "Containerizing applications for consistent and scalable deployment.",
      },
    ]
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Projects",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [],
};

export {person, social, newsletter, home, about, blog, work, gallery};
