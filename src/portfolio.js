/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Gaurav V.",
  title: "Hi all, I'm Gaurav",
  subTitle: emoji(
    "A passionate Web Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1W5RkpnKiXD2FDEQOCqUI360MlZzzsEvJ/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vermagaurav8",
  linkedin: "https://www.linkedin.com/in/vermagaurav8",
  gmail: "gaurav@vermagaurav.co",
  twitter: "https://twitter.com/vermagaurav0",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop responsive websites using React and other frameworks."),
    emoji(
      "⚡ Progressive Web Applications ( PWA ) and Single Page Applications( SPA )."
    ),
    emoji("⚡ Building backend using Node and Express."),
    emoji("⚡ Integration of third party services such as Firebase.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Problem Solving", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Development Intern",
      company: "Legal Aid Clinic, University of Lucknow",
      companylogo: require("./assets/images/LAC.jpeg"),
      date: "June 2020 – Sept 2020",
      desc: "",
      descBullets: [
        "Developed web pages for the Legal Aid clinic which provides free legal Aid to needy people",
        "Used to provide info about the team and how Legal Aid clinics work"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// const openSource = {
//   showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
//   display: false // Set false to hide this section, defaults to true
// };

// Some big projects you have worked on

const bigProjects = {
  title: "Projects 💻",
  subtitle: "SOME COOL STUFF THAT I HAVE DONE!",
  projects: [
    {
      image: require("./assets/images/callmeup.jpg"),
      projectName: "Callmeup",
      projectDesc:
        "Video chat app that works on P2P connection. Developed using WebRTC and Firebase Realtime DB as a signalling server",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/vermagaurav8/callmeup"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ulinkus.jpeg"),
      projectName: "Ulinkus",
      projectDesc:
        "A powerful link management platform which provides short readable links for long URLs and many more to come..",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/Ulinkus"
        }
      ]
    },
    {
      image: require("./assets/images/board.png"),
      projectName: "Feed Board",
      projectDesc:
        "Draw on the video feed from the webcam using hand gestures. Developed using OpenCV in python.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/vermagaurav8/Feedboard"
        }
      ]
    },
    {
      image: require("./assets/images/auth.jpg"),
      projectName: "Authentication API",
      projectDesc:
        "RESTful Api served over HTTPS, it offers endpoints so your users can log in, sign up and log out.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/vermagaurav8/Authentication-API"
        }
      ]
    },
    {
      image: require("./assets/images/task.jpeg"),
      projectName: "Task Manager",
      projectDesc:
        "Task manager that helps you to keep in control of everything, either in your personal or work life",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tasktracker9.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/ER.jpg"),
      projectName: "ER Calculator",
      projectDesc:
        "This ER calculator helps you to know the value of your amount in any other country.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://exchange-rate-calculator.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/portfolio.jpg"),
      projectName: "Portfolio",
      projectDesc: "This Website is my Portfolio, developed using Reactjs.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/vermagaurav8/vermagaurav.co"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Member of DSC UIET",
      subtitle: "Technical Team Lead at Developer Students Club UIET",
      image: require("./assets/images/DSC.jpeg"),
      footerLink: [
        {
          name: "Website",
          url: "https://dsc.community.dev/university-institute-of-engineering-and-technology-kurukshetra-university/"
        }
      ]
    },
    {
      title: "HTML, CSS and Javascript for Web Developers",
      subtitle: "Completed 6 week course from Coursera",
      image: require("./assets/images/coursera.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/6C9FZXV7VA2E"
        }
      ]
    },

    {
      title: "Institute rank 1 @GFG",
      subtitle: "Rank 1 @GeeksforGeeks with a coding score of 1400+",
      image: require("./assets/images/GFG.png"),
      footerLink: [
        {
          name: "Profile",
          url: "https://auth.geeksforgeeks.org/user/vermagaurav8/practice/"
        }
      ]
    },

    {
      title: "4⭐ @CodeChef",
      subtitle: "4⭐ coder @CodeChef with a rating of 1803",
      image: require("./assets/images/CodeChef.jpeg"),
      footerLink: [
        {
          name: "Profile",
          url: "https://www.codechef.com/users/vermagaurav"
        }
      ]
    },

    {
      title: "Google Code Jam",
      subtitle:
        "Qualified CodeJam 2021 qualification round with a global rank of 1181.",
      image: require("./assets/images/codejam.png"),
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "vermagaurav0", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  // openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
