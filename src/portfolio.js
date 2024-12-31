/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bryan Rojas's Portfolio",
  description:
    "A Cybersecurity and Software Engineer who likes to play different technologies and platforms.",
  og: {
    title: "Bryan Rojas Portfolio",
    type: "website",
    url: "https://github.com/brojasl90",
  },
};

//Home Page
const greeting = {
  title: "Bryan Rojas",
  //logo_name: "AshutoshHathidara",
  logo_name: "BryanRojas",
  nickname: "h1ddenIT",
  subTitle:
    "A Cybersecurity and Software Engineer who likes to play different technologies and platforms.",
  resumeLink:
    "https://drive.google.com/file/d/1-padDmb9_Xl4qL3QDWyt0uTFCTpu2fx7/view",
  portfolio_repository: "https://github.com/brojasl90",
  githubProfile: "https://github.com/brojasl90",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/brojasl90",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bryan-rl/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  /*
  {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  */
  {
    name: "Gmail",
    link: "mailto:brojasl18@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/BryanRL11",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  /*
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  */
];

const skills = {
  data: [
    {
      title: "Pentester & Cybersecurity",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Performing manual penetration tests of websites, services, infrastructure, and networks to discover and exploit vulnerabilities",
        "⚡ Developing tools that automate discovery or exploitation (e.g. bash, Python, JavaScript)",
        "⚡ Profound knowledge of conducting information assurance evaluation tests",
        "⚡ Proficient in scripting languages such as Python",
      ],
      softwareSkills: [
        {
          skillName: "KaliLinux",
          fontAwesomeClassname: "simple-icons:kalilinux",
          style: {
            backgroundColor: "#557C94",
            color: "#FFFFFF",
          },
        },
        {
          skillName: "OWASP",
          fontAwesomeClassname: "simple-icons:owasp",
          style: {
            backgroundColor: "#CCCCFF",
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            backgroundColor: "#1679A7",
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Nmap",
          fontAwesomeClassname: "file-icons:nmap",
          style: {
            backgroundColor: "transparent",
            color: "#89CFF0",
          },
        },
      ],
    },
    {
      title: "Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end",
        //"⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Laravel & Angular",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Microsoft SQL",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: {
            color: "#CC2927",
          },
        },
        {
          skillName: "mySQL",
          fontAwesomeClassname: "logos:mysql-icon",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            color: "#D24939",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Hack The Box",
      iconifyClassname: "simple-icons:hackthebox",
      style: {
        color: "#9FEF00",
      },
      profileLink: "https://app.hackthebox.com/profile/245289",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidad Tecnica Nacional de Costa Rica",
      subtitle: "B. in Software Engineering",
      logo_path: "utn.jpg",
      alt_name: "UTN",
      duration: "2017 - 2023",
      descriptions: [
        "⚡ I have studied software engineering subjects like DS, Algorithms, DBMS, OS, CA, etc.",
        "⚡ Apart from this, I have done courses on Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://utn.ac.cr",
    },
    {
      title: "IQ4",
      subtitle: "Pentest and Forensics Package, Cybersecurity",
      logo_path: "iQ4.png",
      alt_name: "IQ4",
      duration: "2021",
      descriptions: [
        "⚡ Preparation for Comptia Pentest+ and CSX Forensics Analysis Certificate.",
      ],
      website_link: "https://www.iq4.com/",
    },
    {
      title: "Instituto Nacional de Aprendizaje",
      subtitle: "Tech. in Telemathics",
      logo_path: "ina.png",
      alt_name: "Instituto Nacional de Aprendizaje",
      duration: "2012 - 2014",
      descriptions: [
        "⚡ I have taken varity of courses related to networking, technology infrastructure, servers, scripting and physical equipment experienced.",
      ],
      website_link: "https://www.ina.ac.cr/SitePages/Inicio.aspx",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "OSCP+",
      subtitle: "- Offensive Security",
      logo_path: "PEN-200-color-outline.svg",
      certificate_link:
        "https://credentials.offsec.com/2f9851a8-ebfb-47cc-8aa2-b3e46827ed3c#acc.WFPknuBN",
      alt_name: "Offensive Security",
      color_code: "#000000",
    },
    {
      title: "Certified Ethical Hacker",
      subtitle: "- EC Council",
      logo_path: "ceh.jpg",
      certificate_link: "https://www.eccouncil.org/",
      alt_name: "EC Council",
      color_code: "#FFFFFF",
    },
    {
      title: "GSEC",
      subtitle: "- SANS",
      logo_path: "gsec.png",
      certificate_link:
        "https://www.giac.org/certifications/security-essentials-gsec/",
      alt_name: "SANS",
      color_code: "#0C9D5899",
    },
    {
      title: "IBM QRadar SIEM Foundation",
      subtitle: "- IBM",
      logo_path: "IBM_QRadar_SIEM_Foundation.png",
      certificate_link:
        "https://www.credly.com/badges/1b6b7bf7-5f32-4690-91c2-a6e731355d36?source=linked_in_profile",
      alt_name: "GCP",
      color_code: "#FFFFFF",
    },
    {
      title: "Azure fundamentals",
      subtitle: "- Microsoft",
      logo_path: "az900.png",
      certificate_link:
        "https://learn.microsoft.com/en-us/training/courses/az-900t00",
      alt_name: "GCP",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship, Work, and CTF",
  description: "I have worked with many different services.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Pentester",
          company: "Procter & Gamble",
          company_url: "https://latam.pg.com/",
          logo_path: "p&g.png",
          duration: "October 2021 - Current",
          location: "San Jose, Costa rica",
          description: "I am working as a pentester.",
          color: "#0879bf",
        },
        {
          title: "Sr. Windows Engineer",
          company: "Auxis",
          company_url: "https://www.auxis.com/",
          logo_path: "auxis.jpg",
          duration: "Feb 2021 - Aug 2021",
          location: "Alajuela, Costa rica",
          description:
            "Responsible for designing and defining operating run-books. Provide L3 troubleshooting escalated support issues related to data center operations, WAN and LAN connectivity, and security. Prepare a root cause analysis to maintain the quality & quantity of the required efforts per device according to established guidelines. Architect, design, deploy, maintain, and lead the implementation of cloud & on premised data center solutions using multiple vendors.",
          color: "#0879bf",
        },
        {
          title: "System Administrator",
          company: "Smith & Nephew",
          company_url: "https://www.smith-nephew.com/",
          logo_path: "SNN.png",
          duration: "Aug 2020 - Feb 2021",
          location: "Alajuela, Costa rica",
          description:
            "Monitor performance and maintain systems according to requirements, act as the first point of contact in case of a system failure. Manage scheduled/automated data imports.",
          color: "#0879bf",
        },
        {
          title: "System Administrator & Infrastructure Engineer",
          company: "Intertec International",
          company_url: "https://www.intertecintl.com/",
          logo_path: "intertec.png",
          duration: "July 2014 - July 2020",
          location: "Heredia, Costa rica",
          description:
            "I was responsible for upgrade systems, servers and networking devices with new releases and models upgrade, Manage network servers, switches and firewalls, Install and configure software and hardware for end users based on policies standards (Windows and mac OS), Design, create and execute a Hardware/software migration including legacy applications, Coordinate and validate daily tasks accomplishment based on project plan.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Cybersecuirty projects and write about ctf challenges.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {

  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};



const publications = {
  data: [
  /*
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  */
  ],
};


// Contact Page

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "meTrans.png",
    description: "You can message me a message by LinkedIn.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://github.com/brojasl90/brojasl90",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    /*
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
    */
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};