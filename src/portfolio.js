/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Raghav's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Raghav Narula Portfolio",
    type: "website",
    url: "http://raghavnarula.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Raghav Narula",
  logo_name: "RaghavNarula",
  nickname: "mononoke",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.First Year graduate student at NC State specializing in Software Engineering",
  resumeLink:
    "https://docs.google.com/document/d/1cXMWOGuS0q6VuG57jDQmYsbDIKV-ak3b",
  portfolio_repository: "https://github.com/raghavnarula/masterPortfolio",
  githubProfile: "https://github.com/raghavnarula",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/raghavnarula",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raghav-narula01/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@raghavnarula6435",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:rnarula2@ncsu.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/raghavnarula01",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_raghav30/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Django",
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
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:bootstrap",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
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
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
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
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Automation and Testing",
      fileName: "DesignImg",
      skills: [
        "⚡ Writing Automation Scripts in Python and Bash",
        "⚡ Experienced writing Testing Frameworks in Python and JavaScript",
        "⚡ Experienced Automating Jira and writing Jira Scripts.",
      ],
      softwareSkills: [
        {
          skillName: "Selenium",
          fontAwesomeClassname: "simple-icons:selenium",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#C21325",
          },
        },
        {
          skillName: "Apache Jmeter",
          fontAwesomeClassname: "simple-icons:apachejmeter",
          style: {
            color: "#D22128",
          },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            color: "#4EAA25",
          },
        },
        {
          skillName: "Robot Framework",
          fontAwesomeClassname: "simple-icons:robotframework",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  // competitiveSites: [
  //   {
  //     siteName: "LeetCode",
  //     iconifyClassname: "simple-icons:leetcode",
  //     style: {
  //       color: "#F79F1B",
  //     },
  //     profileLink: "https://leetcode.com/layman_brother/",
  //   },
  // ],
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "North Carolina State University",
      subtitle: "Masters of Computer Science",
      logo_path: "ncsu_logo.png",
      alt_name: "NC STATE",
      duration: "August 2023-Present",
      descriptions: [
        "⚡ I have taken up software related courses like - Software Engineering, Object Oriented Design and Development and Design and Analysis of Algorithms.",
      ],
    },
    {
      title: "Thapar Institute of Engineering and Technology",
      subtitle: "Bachelors of Computer Engineering",
      logo_path: "thapar_logo.webp",
      alt_name: "TIET logo",
      duration: "2019-2023",
      descriptions: [
        "⚡ I have studied various courses related to software and Artificial Intelligence like- Preditive Analysis, Data Science, Discrete Mathematics, Operating Systems, Database Management and Computer Networking.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new deep learning models in Graph ML and Computer Vision.",
        "⚡ During my time at school, I was also associated with ACM student society. As part of it, I have worked on organizing several events.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have worked as QA testing and automation engineer during my internship and also worked under several professors in developing novel AI models.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Software Developer in Testing",
          company: "Attentive.ai",
          company_url: "https://attentive.ai/",
          logo_path: "attentive.png",
          duration: "Jan 2023 - Aug 2023",
          location: "Noida, India",
          description:
            "Worked in the Feature Extraction (FX) module for feature annotation leveraging AI and Human in the loop. Conducted load testing through Jmeter. Created Automated Testing Framework using Python libraries. Automated JIRA for smoother project tracking.",
          color: "#0879bf",
        },
        {
          title: "Mitacs Globalink Research Intern",
          company: "Concordia University",
          company_url: "",
          logo_path: "concordia.png",
          duration: "June 2022 - Sept 2022",
          location: "Montreal, Canada",
          description:
            "Created Deep learning models to help predict passenger prediction for next 24 hours using Graph Neural Networks. Deployed successfully in the city of Laval, Canada.",
          color: "#0879bf",
        },
        {
          title: "Research Intern",
          company: "Indian Institute of Information Technology, Allahabad",
          company_url: "",
          logo_path: "iiit-a.png",
          duration: "Nov 2020 - Jan 2022",
          location: "Prayagraj, India",
          description:
            "Worked in Dr.GC Nandi's lab to develop Low cost household robots to solve the SLAM problem. Created a novel Deep Learning Architecture to solve the SLAM problem and run under 8GB RAM. Published our research findings in Neural Computing and Applications Journal.",
          color: "#0879bf",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Software Development, ML, AI.",
  },
  blogSection: {
    //   title: "Blogs",
    //   subtitle:
    //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    //   link: "https://blogs.ashutoshhathidara.com/",
    //   avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Phone Number",
    subtitle: "+1-9195598126",
  },
  phoneSection: {
    title: "Email",
    subtitle: "rnarula2@ncsu.edu",
  },
};

const courses = {
  courseslist: [
    {
      title: "abc",
      university: "",
      link: "",
    },
  ],
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
