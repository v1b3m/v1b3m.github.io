import { ActiveTab } from "./index";

export interface WorkData {
  role: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

const data: Record<ActiveTab, WorkData> = {
  gitstart: {
    startDate: "Sep 2022",
    endDate: "Present",
    role: "Fullstack developer",
    highlights: [
      "I worked as a software engineer at GitStart, where I provided Code As A Service to a variety of clients, including SourceGraph, Cal.com, Metabase, coherent, savvy, BlueMeg, and The Linux Foundation. I used a variety of modern technologies, including Node.js, JavaScript, TypeScript, FusionAuth, Firebase, NextAuth, Next.js, React, Cypress, redux, and GraphQL. My work resulted in significant cost savings, increased revenue, and improved customer satisfaction for my clients.",
      "I have a proven track record of success in creating and merging PRs. In my previous role at GitStart, I created and merged over 50 PRs to various client projects. My PRs implemented a variety of features, including user authentication, user management, data storage, and data security. My work improved the client projects by making them more user-friendly, efficient, and secure.",
      "I have a proven track record of success in managing client projects and developer teams. In my previous role at GitStart, I managed over 5 client projects and developer teams. I successfully delivered all projects on time and within budget. I also improved team morale and productivity.",
    ],
  },
  remotemore: {
    startDate: "Aug 2021",
    endDate: "Sep 2022",
    role: "Fullstack developer",
    highlights: [
      "I was responsible for maintaining a recruitment application for a large technology company. The application was used by recruiters to search for candidates, post jobs, and manage the hiring process. I used React, TypeScript, and Node.js to maintain the application and to add new features.",
      "I built new features for a number of different applications, including a chat feature, a call scheduling feature, and a payment processing feature. I used React, TypeScript, and Node.js to build these features.",
      "I maintained a number of microservices and a backend using Node.js, Firebase, Algolia, and TypeScript. The microservices were used to provide different services, such as user authentication, data storage, and API management. The backend was used to provide a central location for all of the microservices to communicate with each other.",
    ],
  },
  motypes: {
    startDate: "Jul 2020",
    endDate: "Aug 2021",
    role: "Fullstack developer",
    highlights: [
      "I have experience building REST and GraphQL APIs for mobile and web apps using a TypeScript/Node.js backend. I have used a variety of technologies, including Express, MongoDB, and Sequelize. I have also faced a variety of challenges, such as performance optimization, security, and scalability. I have successfully overcome these challenges and delivered high-quality APIs that have improved the mobile and web apps I have worked on.",
      "I have experience building iOS and Android mobile apps using React-Native/TypeScript. I have used a variety of technologies, such as React Native, Expo, and Firebase. I have also faced a variety of challenges, such as performance optimization, user experience, and security. I have successfully overcome these challenges and delivered high-quality mobile apps that have improved the user experience and made them more secure.",
      "I built a website and an admin dashboard using React/TypeScript. The website was a company website that showcased the company's products and services. The admin dashboard was used to manage the company's products, customers, and orders. React/TypeScript was a good choice for this project because it allowed me to build a user-friendly and responsive website and admin dashboard.",
    ],
  },
  yonja: {
    startDate: "May 2019",
    endDate: "Dec 2019",
    role: "Backend engineer",
    highlights: [
      "I built a RESTful and GraphQL API for a mobile application using Node.js and the Google Cloud Platform. The API was used to provide data to the mobile application, such as user profiles, product catalogs, and order history. Node.js and the Google Cloud Platform were a good choice for this project because they are both scalable and reliable. Using both a REST and GraphQL API allowed me to provide a more flexible and efficient API for my users.",
      "I integrated a MongoDB database into my Node.js application. MongoDB is a NoSQL database that is well-suited for storing large amounts of data. Using a NoSQL database allowed me to store my data in a more flexible and efficient way. The biggest challenge I faced was migrating my data from my old database to MongoDB. I overcame this challenge by using a migration tool that helped me to automate the process.",
      "I built a payment system using Stripe and Flask/Python. Stripe is a popular payment processor that makes it easy to accept payments online. Using Flask/Python allowed me to build a simple and efficient payment system. The biggest challenge I faced was integrating Stripe with my application. I overcame this challenge by using Stripe's API documentation and by working with Stripe's support team.",
    ],
  },
  matatu: {
    startDate: "Mar 2018",
    endDate: "April 2019",
    role: "Fullstack engineer",
    highlights: [
      "I built a social app using React Native and TypeScript. The app allowed users to create profiles, connect with friends, and share photos and videos. React Native and TypeScript were a good choice for this project because they allowed me to build a native mobile app that could be used on both iOS and Android devices.",
      "I built an administrative dashboard using React and TypeScript. The dashboard allowed users to manage users, products, and orders. React and TypeScript were a good choice for this project because they allowed me to build a user-friendly and responsive administrative dashboard.",
      "I built a RESTful API using Node.js and TypeScript. The API was used to provide data to a mobile application. Node.js and TypeScript were a good choice for this project because they allowed me to build a scalable and reliable API.",
    ],
  },
  freelance: {
    startDate: "Jan 2017",
    endDate: "Feb 2018",
    role: "Fullstack engineer",
    highlights: [
      "As a freelancer, I have built a wide variety of software applications, including iOS and Android apps, websites, and APIs.",
      "I have experience with a variety of programming languages and technologies, including Firebase, JavaScript, TypeScript, React, React Native, and Node.js.",
      "I have experience working with both SQL and NoSQL databases.",
      "I am also proficient in using cloud computing platforms such as Google Cloud Platform.",
    ],
  },
};

export default data;
