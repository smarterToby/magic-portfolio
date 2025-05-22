import {InlineCode, Logo} from "@/once-ui/components";

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
    email: "hello@reuss.com",
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
    // {
    //     name: "X",
    //     icon: "x",
    //     link: "https://x.com/smarterToby",
    // },
    {
        name: "Email",
        icon: "email",
        link: `mailto:${person.email}`,
    },
];

const home = {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Home",
    title: `${person.firstName}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>From vision to code - shaping digital solutions</>,
    featured: {
        display: false,
        title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
        href: "/work/building-once-ui-a-customizable-design-system",
    },
    subline: (
        <>
            I'm {person.firstName}, a Sofware Engineer at <InlineCode>IBM</InlineCode>, where I build robust software
            with
            cutting-edge technolgy.
        </>
    ),
};

const about = {
    path: "/about",
    label: "About",
    title: `About – ${person.name}`,
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
                I’m a 20-year-old software engineer from Germany, dedicated to coding and staying ahead in tech. I focus
                on leveraging cloud technologies, applying Clean Code principles, and mastering new languages to create
                efficient, scalable solutions while embracing challenges that expand my expertise.
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
                        Developing cloud-based applications for clients in
                        the financial industry, with a focus on clean architecture,
                        performance, and reliability.
                    </>,
                    <>
                        Collaborating closely with cross-functional teams to deliver secure
                        and scalable software solutions tailored to client needs.
                    </>,
                ],
                images: [],
            },
            {
                company: "NÜRNBERGER Versicherung",
                timeframe: "2021 - 2024",
                role: "Trainee Software Developer",
                achievements: [
                    <>
                        Worked as a fullstack developer during the apprenticeship, building,
                        maintaining, and deploying several cloud-based applications across
                        various departments.
                    </>,
                ],
                images: [],
            },
        ],
    },
    certificates: {
        display: true,
        title: "Certificates",
        certificates: [
            {
                name: "AWS Cloud Practicioner",
                valid: "Issued Dec 2024 - Expires Dec 2027",
                link: "https://www.credly.com/badges/6cf7ece4-6e97-4835-8afd-0cd055c8d39f"
            },
            {
                name: "Microsoft Certified: Azure Fundamentals",
                valid: "Issued Dec 2024",
                link: "https://learn.microsoft.com/en-us/users/tobiasreuss/credentials/e3c6925f73285cff"
            },
            {
                name: "Enterprise Design Thinking Practicioner",
                valid: "Issued Oct 2024",
                link: "https://www.credly.com/badges/9e0875c3-d40c-487e-94d7-a097b0a64d55"
            },
            {
                name: "AWS Partner: Generative AI Essentials",
                valid: "Issued Nov 2024",
                link: "https://www.credly.com/badges/33b29b39-79c8-459e-9840-d1aa449fe410",
            },
            {
                name: "Red Hat OpenShift Developer I: Introduction to Containers",
                valid: "Issued Nov 2024",
                link: "https://www.credly.com/badges/dccf3978-db91-4099-bb4c-39f52363cb7b"
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: "Studies",
        institutions: [
            {
                name: "State Vocational College III",
                description: <>Studied software development. (GPA: 3.8)</>,
            },
        ],
    },
    technical: {
        display: true, // set to false to hide this section
        title: "Technical skills",
        skills: [
            {
                title: "Java",
                description:
                    "Proficient in Java for backend development and enterprise applications.",
                images: []
            },
            {
                title: "Spring",
                description:
                    "Experienced in building scalable web applications using Spring Boot.",
                images: []
            },
            {
                title: "TypeScript",
                description:
                    "Writing clean, type-safe code for robust frontend and backend systems.",
                images: []
            },
            {
                title: "Angular",
                description: "Developing dynamic, enterprise-level SPAs with Angular.",
                images: []
            },
            {
                title: "React",
                description:
                    "Creating modern, server-rendered React apps using Next.js.",
                images: []
            },
            {
                title: "AWS",
                description:
                    "Deploying and managing cloud infrastructure with AWS services.",
                images: []
            },
            {
                title: "Kubernetes",
                description:
                    "Orchestrating containerized applications with Kubernetes.",
                images: []
            },
            {
                title: "Docker",
                description:
                    "Containerizing applications for consistent and scalable deployment.",
                images: []
            }
        ],
    },
};

const blog = {
    path: "/blog",
    label: "Blog",
    title: "Writing about design and tech...",
    description: `Read what ${person.name} has been up to recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work = {
    path: "/work",
    label: "Work",
    title: `Projects – ${person.name}`,
    description: `Dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery = {
    path: "/gallery",
    label: "Gallery",
    title: `Photo gallery – ${person.name}`,
    description: `A photo collection by ${person.name}`,
    // Images by https://lorant.one
    // These are placeholder images, replace with your own
    images: [
        {
            src: "/images/gallery/horizontal-1.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-2.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-3.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/horizontal-4.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/vertical-1.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-2.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-3.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/vertical-4.jpg",
            alt: "image",
            orientation: "vertical",
        },
    ],
};

export {person, social, newsletter, home, about, blog, work, gallery};
