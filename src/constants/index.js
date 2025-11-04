import {
  FaArrowLeft,
  FaArrowRight,
  FaBookDead,
  FaCaretUp,
  FaChevronDown,
  FaCircle,
  FaExchangeAlt,
  FaExclamation,
  FaGamepad,
  FaGhost,
  FaHippo,
  FaIgloo,
  FaRebel,
  FaRegEdit,
  FaTags,
  FaTimes,
  FaTram,
  FaYammer,
} from "react-icons/fa";
// Icons
import {
  FaInstagram,
  FaWhatsapp,
  FaClock,
  FaQuestionCircle,
  FaReact,
  FaBox,
  FaStar,
  FaPenFancy,
  FaCheck,
  FaQuestion,
  FaPager,
  FaBook,
  FaAnchor,
  FaHome,
  FaPen,
  FaPlus,
  FaGithub,
  FaTwitter,
  FaQuoteLeft,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

import { SiNetflix, SiDropbox, SiShopify } from "react-icons/si";
import {
  alain2,
  alex,
  aurora,
  aurora2,
  Demonstrate2,
  devlin,
  examination,
  examination2,
  how2,
  messagebox2,
  reaccertification2,
  reaccertification3,
  reactcertification,
  reacticon2,
} from "../assets";

// Navigation links
export const navLinks = [
  { id: "stepToCertification", title: "Step To Certification" },
  { id: "certificates", title: "Certificates" },
  { id: "pricing", title: "Pricing" },
  { id: "blog", title: "Blog" },
  { id: "login", title: "Log In" },
];

// Companies
export const company = [
  { id: 1, icon: FaInstagram, title: "Instagram" },
  { id: 2, icon: SiNetflix, title: "Netflix" },
  { id: 3, icon: FaWhatsapp, title: "WhatsApp" },
  { id: 4, icon: SiDropbox, title: "Dropbox" },
  { id: 5, icon: SiShopify, title: "Shopify" },
];

//
export const benefits = [
  {
    title: "Demonstrate Your React competency",
    description:
      "A React certification validates your expertise in building robust, scalable applications with React. Employers and clients seek certified developers who stay ahead of the curve and deliver top-quality work. Showcase your commitment to excellence with a React credential built by recognized international experts.",
    image: Demonstrate2,
  },
  {
    title: "Career Opportunity",
    description:
      "React skills are in high demand, and certification sets you apart. Stand out from the competition and unlock new job opportunities at leading companies. Certified developers can command higher salaries and faster advancement to senior roles. Invest in your future today.",
    image: messagebox2,
  },
  {
    title: "How Certification can benefit you team",
    description:
      "Certifying your team cultivates a culture of continuous learning and improvement. Certified developers can enjoy boosted morale, improved productivity, and better efficiency through deepened skills and confidence. With a broader range of expertise, your team can tackle any challenge and ship better products faster.",
    image: how2,
  },
];

export const step = [
  {
    title: "Step1",
    icon: FaBox,
    heading: "Exam Preparation",
    description:
      "Review the exam preparation guide to ensure that you are familiar with the requirements of the exam and clear on what is expected",
  },

  {
    title: "Step2",
    icon: FaStar,
    heading: "Optional Training",
    description:
      "If you need additional training, there is additional self-study training available, or alternatively you can elect to attend the live, intensive bootcamp training sessions",
  },

  {
    title: "step3",
    icon: FaClock,
    heading: "Take Examination",
    description:
      "Take the certification online proctored exam, which will consist of both multiple-choice questions and practical coding exercises",
    img1: examination,
    img2: examination2,
  },
];

// Research Data
export const researchdata = [
  {
    reacticon: FaReact,
    percentage: "90%",
    description: "of developers would read the docs before taking the exam",
  },
  {
    reacticon: FaPenFancy, // notebook and pen icon
    percentage: "82%",
    description: "aim to achieve advanced or both certification levels",
  },
  {
    reacticon: FaBox,
    percentage: "88%",
    description:
      "look to Certification to validate their skills and knowledge in React",
  },
  {
    reacticon: FaStar,
    percentage: "96%",
    description:
      "believe that having a React certification will enhance their professional credibility",
  },
];
// export defalut

// React Developer Cards
export const reactDeveloper = [
  {
    reacticons: FaReact,
    title: "Junior React Developer",
    timeicon: FaClock,
    time: "40 min",
    qicon: FaBook,
    questions: "50 Questions",
    description:
      "Validate your React fundamentals with this certification. Demonstrate your ability to work with core concepts and basic implementations, enhancing your credibility with employers and clients. This certification confirms your readiness for junior React developer roles and provides a solid foundation for your career growth.",
    color: "#61DBFB", // React blue
    buttonText: "View Pricing",
  },
  {
    reacticons: FaReact,
    title: "Mid-Level React Developer",
    timeicon: FaClock,
    time: "135 min",
    qicon: FaBook,
    questions: "40 Questions and 135 min of coding challenges",
    description:
      "Prove your proficiency in intermediate React concepts and real-world applications. This certification showcases your ability to tackle complex projects, making you stand out in the job market. Ideal for developers looking to take on more challenging React roles and projects.",
    color: "#f97316", // teal    #0ea5a4
    buttonText: "View Pricing",
  },
  {
    reacticons: FaReact,
    title: "Senior React Developer",
    timeicon: FaClock,
    time: "105 min",
    qicon: FaBook,
    questions: "40 Questions and 105 min of coding challenges",
    description:
      "Demonstrate your expertise in React architecture and large-scale application development. This certification verifies your ability to lead React projects, solve advanced challenges, and architect enterprise-level applications. Position yourself as a top-tier React professional capable of driving complex, high-stakes projects.",
    color: "#0ea5a4", // orange     #f97316
    buttonText: "View Pricing",
  },
];

// Default export
export default reactDeveloper;

export const optional = [
  {
    icon: FaAnchor,
    title: "Self-Study Training",
    description:
      "Prepare at your own pace with our comprehensive self-study materials. Get on-demand access to interactive lessons, coding exercises, and quizzes tailored for:",
    tickicon: FaCheck,
    info1: " Junior React Developer Certification",
    info2: "Mid-Level React Developer Certification",
    info3: " Senior React Developer Certification",
  },
  {
    icon: FaHome,
    title: " Live Bootcamps",
    description:
      "Prefer an immersive, instructor-led experience? Level up with our intensive live bootcamps conducted by React experts Choose from.",
    tickicon: FaCheck,
    info1: "3-Day Mid-Level React Developer Bootcamp",
    info2: " 3-Day Senior React Developer Bootcamp",
  },
];

export const pricing = [
  {
    icon: FaPen,
    heading: "early Access to the self-study training",
    plusicon: FaPlus,
    afterhover: {
      heading: "early Access to the self-study training",
      description: `Get a head start on your exam1
      preparation with early access to the study naterial should you purchase the option
      `,
    },
  },
  {
    icon: FaPen,
    heading: "priorit delvery for your certificaion vanchor",
    plusicon: FaPlus,
    afterhover: {
      heading: "priorit delvery for your certificaion vanchor",
      description: `use any time after the examinition launch because one of the first oto get your certificate React Reveloper certified
      `,
    },
  },

  {
    icon: FaPen,
    heading: "priorit delvery for your certificaion vanchor",
    plusicon: FaPlus,
    afterhover: {
      heading: "priorit delvery for your certificaion vanchor",
      description: `use any time after the examinition launch because one of the first oto get your certificate React Reveloper certified
      `,
    },
  },

  {
    icon: FaPen,
    heading: "priorit delvery for your certificaion vanchor",
    plusicon: FaPlus,
    afterhover: {
      heading: "priorit delvery for your certificaion vanchor",
      description: `use any time after the examinition launch because one of the first oto get your certificate React Reveloper certified
      `,
    },
  },

  {
    icon: FaPen,
    heading: "priorit delvery for your certificaion vanchor",
    plusicon: FaPlus,
    afterhover: {
      heading: "priorit delvery for your certificaion vanchor",
      description: `use any time after the examinition launch because one of the first oto get your certificate React Reveloper certified
      `,
    },
  },
];

export const examinationdata = [
  {
    img: aurora,
    name: "Aurora Scharff",
    description: "React Expert & Microsoft MVP in Web Technologies",
    githubicon: FaGithub,
    twittericon: FaTwitter,
  },
  {
    img: alain2,
    name: "Alain Chautard",
    description: "Google Developer Expert & Microsoft MVP in Web Technologies",
    githubicon: FaGithub,
    twittericon: FaTwitter,
  },
  {
    img: alex,
    name: "Alex Kyriakidis",
    description: "Founder & CEO of certificates.dev and Vue School",
    githubicon: FaGithub,
    twittericon: FaTwitter,
  },
  {
    img: devlin,
    name: "Devlin Duldulao",
    description: "React Expert & Microsoft MVP in Web Technologies",
    githubicon: FaGithub,
    twittericon: FaTwitter,
  },
];

export const newsdata = [
  {
    img: reactcertification,
    title: "React Framework amd Server-Side Features: Beyond Client Side...",
    description:
      "Learn Reac Sever Side features: SSR with streaming , statice pre-rendering, hydration,Server componetent, and Server Function. Discover how framewrok like Next js ..",
    author: {
      img: aurora2,
      name: "aurora",
      data: "Oct 1,2025",
    },
  },

  {
    img: reaccertification2,
    title: "React <View Transition>:Smooth Animation Made Simple",
    description:
      "Learn Reac Sever Side features: SSR with streaming , statice pre-rendering, hydration,Server componetent, and Server Function. Discover how framewrok like Next js ..",
    author: {
      img: aurora2,
      name: "aurora",
      data: "Sep 17,2025",
    },
  },

  {
    img: reaccertification3,
    title: "React cucurrent Feature An Overview",
    description:
      "Learn Reac Sever Side features: SSR with streaming , statice pre-rendering, hydration,Server componetent, and Server Function. Discover how framewrok like Next js ..",
    author: {
      img: aurora2,
      name: "aurora",
      data: "Aug 10,2025",
    },
  },
];

export const testimonialdata = [
  {
    qouticon: FaQuoteLeft,
    description: `The training and preparation to take the React exam as well as the coding challenges are well-crafted for each level of users. Kudos to the whole team who built the end-to-end learning, training and examination. The long thoughtful process of everything paid off. I highly recommend the certification to everyone who needs a proof of their ability.`,
    author: {
      img: devlin,
      name: "Devlin Duldulao",
      profession: "React Expert & Microsoft MVP in Web Technologies",
    },
  },
  {
    qouticon: FaQuoteLeft,
    description: `Participating in this certification program has significantly deepened my understanding of React. While I had prior experience with the framework, the program clarified some advanced concepts like hooks, context API, and performance optimization techniques. One of the most valuable aspects of the exam experience was the way it tested practical, real-world React knowledge rather than just theoretical understanding. The questions were scenario-based, which pushed me to think critically and apply concepts like component lifecycle, state management, and hooks in context. I also appreciated the balance between multiple-choice questions and code-based problem solving, as it provided a more complete assessment of my skills. Overall, the exam felt like a true reflection of what a React developer needs to know to build production-ready applications. It’s made me a more confident and efficient React developer.`,
    author: {
      img: alex,
      name: "Abdallah Labib Hamdan",
      profession: "Frontend Developer at ACS Techs",
    },
  },
];

// faqsData.js

export const faqs = [
  {
    icon: FaStar,
    title: "General",
    downarrow: FaChevronDown,
    questions: [
      {
        plusicon: FaPlus,
        ques: "Existing React Certification Customers",
        quesdetail: `The React Certification program is entering an exciting new chapter with Certificates.dev. We're committed to ensuring a smooth transition for all our valued React Certification customers. If you have any questions about this, feel free to email us on team@certificates.dev`,
      },
      {
        plusicon: FaPlus,
        ques: "What is the current data/road map of React certification",
        quesdetail: `We have released the React Certification Program with two levels first: Junior and Mid-level. The Senior React Developer Certification will be released in Q3 of 2025. The examination question sets and code challenges for all Certifications are developed in collaboration with a global team, including input from Google Developer Experts, spearheaded by Alain Chautard and Aurora Scharff. We will only release the Senior React examinations when all parties are satisfied with the standard of the exam and after a thorough review and testing process.

Here is the current release schedule:

Any customers who order now will have early access to the Preparation Guides for each level, which will give you an overview of what will be tested in the related exam. All customers will also have access to the Certification Discord server, so you can interact with other developers preparing for the exam, along with the Certification team.

If you order either the Exam & Preparation bundle or the Exam, Preparation & Bootcamp bundle, you will also enjoy early access to the Self-Study training and begin preparing for the exams with code challenges and quizzes.

The React Developer Certification Exams for Junior and Mid-level`,
      },
      {
        plusicon: FaPlus,
        ques: "What is the purpose and benefit of React certification",
        quesdetail: `Professional Credibility

A React Certification will demonstrate a developer's knowledge and skills in this popular library and help enhance professional credibility.

Competitive Edge

Adding a recognized certification to a developer's resume will give a competitive edge over those that are not certified.

Career Advancement

Investing in a React Certification can open up better job opportunities for a developer.

Validation of Skills

Certification is an objective validation of a developer's proficiency in React, and given that it is developed by Microsoft MVPs and Google Developer Experts, will be recognized by other professionals in the industry.

Increased Team Capabilities

Offering React Certification motivates developers to learn new skills, build and ship better products faster, and broaden the variety of skills available. Your team can also improve their competence and confidence to handle any task, leading to better knowledge retention and efficiency.`,
      },
      {
        plusicon: FaPlus,
        ques: "Does holding a React certification guarantee an advantage over the competition when applying for a React job?",
        quesdetail: `Appointments would be based on the merits of your skills and experience relative to the requirements of the position. Having a React Certificate is intended to demonstrate your competence with the React library.`,
      },
      {
        plusicon: FaPlus,
        ques: "Do employers recognize the certificate?",
        quesdetail: `Yes. Certifications on Certificates.dev are designed for real hiring/promotion signals. Vue and Nuxt exams are built with the creators of the frameworks. Angular was built under review by GDEs, Microsoft MVPs created React, and JavaScript was built under review by a panel of top industry experts.

All exams are scenario-based with real code assessments. Many developers add their certificates directly to LinkedIn and use them to stand out in interviews or promotions.

We are also proud to certify developers from well-known companies like Deloitte, Ford, IBM, Samsung, Salesforce, Accenture, and many more.`,
      },
      {
        plusicon: FaPlus,
        ques: "What is the timeline for the Junior and Mid-level React Developer exam?",
        quesdetail: `The Junior and Mid-level React Developer exams have been released on 24 June 2025.`,
      },
      {
        plusicon: FaPlus,
        ques: "What is the timeline for the Certified Senior React Developer?",
        quesdetail: `The Certified Senior React Developer examination is expected to be released in Q3, following a rigorous testing and review process.`,
      },
      {
        plusicon: FaPlus,
        ques: "Who should I contact if I have any questions regarding the Certification program?",
        quesdetail: `Please send an email to our team at team@certificates.dev.`,
      },
      {
        plusicon: FaPlus,
        ques: "What is the validity period of examination vouchers?",
        quesdetail: `Examination vouchers are valid for 3 years.`,
      },
      {
        plusicon: FaPlus,
        ques: "Is there an expiry date for the Certificate?",
        quesdetail: `Your React Certification is valid for 3 years from the date of passing the exam.`,
      },
      {
        plusicon: FaPlus,
        ques: "I’m not ready yet for Senior Certification. Should I get a Senior Bundle still?",
        quesdetail: `Absolutely, the exam vouchers included in the bundle are valid for 3 years from the date of purchase, so you have plenty of time to study and progress. Our preparation training is there to support your journey.`,
      },
      {
        plusicon: FaPlus,
        ques: "I already have a Mid-Level certificate or bundle. Can I upgrade to a Senior Bundle?",
        quesdetail: `Yes. If you already hold a Mid-Level certificate in the same framework, you can upgrade to a Senior certification at any time. During the Autumn Sale, you only pay the difference between what you have already purchased and the discounted Senior Bundle. The upgrade process is available through your dashboard.`,
      },
    ],
  },

  // Payment Section
  {
    icon: FaStar,
    title: "Payment",
    downarrow: FaChevronDown,
    questions: [
      // You can copy the same questions as above or create Payment-specific ones
      {
        plusicon: FaPlus,
        ques: "Existing React Certification Customers",
        quesdetail: `The React Certification program is entering an exciting new chapter with Certificates.dev...`,
      },
    ],
  },

  // Self-Study Training Section
  {
    icon: FaStar,
    title: "Self-Study Training",
    downarrow: FaChevronDown,
    questions: [
      {
        plusicon: FaPlus,
        ques: "Existing React Certification Customers",
        quesdetail: `The React Certification program is entering an exciting new chapter with Certificates.dev...`,
      },
    ],
  },

  // Bootcamp Section
  {
    icon: FaStar,
    title: "Bootcamp",
    downarrow: FaChevronDown,
    questions: [
      {
        plusicon: FaPlus,
        ques: "Existing React Certification Customers",
        quesdetail: `The React Certification program is entering an exciting new chapter with Certificates.dev...`,
      },
      {
        plusicon: FaPlus,
        ques: "Existing React Certification Customers",
        quesdetail: `The React Certification program is entering an exciting new chapter with Certificates.dev...`,
      },
      {
        plusicon: FaPlus,
        ques: "Existing React Certification Customers",
        quesdetail: `The React Certification program is entering an exciting new chapter with Certificates.dev...`,
      },
    ],
  },

  // Examination Section
  {
    icon: FaStar,
    title: "Examination",
    downarrow: FaChevronDown,
    questions: [
      {
        plusicon: FaPlus,
        ques: "Existing React Certification Customers",
        quesdetail: `The React Certification program is entering an exciting new chapter with Certificates.dev...`,
      },
      {
        plusicon: FaPlus,
        ques: "Existing React Certification Customers",
        quesdetail: `The React Certification program is entering an exciting new chapter with Certificates.dev...`,
      },
    ],
  },

  // Prerequisites Section
  {
    icon: FaStar,
    title: "Prerequisites / Who is this for?",
    downarrow: FaChevronDown,
    questions: [
      {
        plusicon: FaPlus,
        ques: "Existing React Certification Customers",
        quesdetail: `The React Certification program is entering an exciting new chapter with Certificates.dev...`,
      },
    ],
  },
];

export const leveldata = [
  // Junior Card
  {
    first: {
      title: "Junior",
      icon: FaBook,
      heading: "Exam Only",
      type: {
        individual: "Individual",
        icon: FaCircle,
        team: "team",
      },
      price: "$69",
      btn: {
        btntext: "Buy Now",
        btnicon: FaArrowRight,
      },
      info: {
        tickicon: FaCheck,
        title: "Preparation Guide Access",
        exicon: FaExclamation,
      },
      info2: {
        tickicon: FaCheck,
        title: "Discord Community Access",
        exicon: FaExclamation,
      },
      info3: {
        tickicon: FaCheck,
        title: "Junior Exam Voucher",
        exicon: FaExclamation,
      },

      learnmorebtn: {
        btntext: "Learn More",
        plusicon: FaPlus,
      },
    },

    second: {
      cardtitle: "BEST VALUE",
      title: "Junior",
      icon: FaIgloo,
      heading: "Exam & Preparation bundle",
      type: {
        individual: "Individual",
        icon: FaCircle,
        team: "team",
      },
      price: "$99",
      btn: {
        btntext: "Buy Now",
        btnicon: FaArrowRight,
      },
      info: {
        tickicon: FaCheck,
        title: "Preparation Guide Access",
        exicon: FaExclamation,
      },
      info2: {
        tickicon: FaCheck,
        title: "Discord Community Access",
        exicon: FaExclamation,
      },
      info3: {
        tickicon: FaCheck,
        title: "Junior Exam Voucher",
        exicon: FaExclamation,
      },
      info4: {
        tickicon: FaCheck,
        title: "Self-Study Training Access",
        exicon: FaExclamation,
      },

      info5: {
        tickicon: FaCheck,
        title: "Free Retake",
        exicon: FaExclamation,
      },
      info6: {
        tickicon: FaCheck,
        title: "Trail Exam",
        exicon: FaExclamation,
      },
      learnmorebtn: {
        btntext: "Learn More",
        plusicon: FaPlus,
      },
    },
  },

  // Mid-Level
  {
    first2: {
      title: "Mid-level",
      icon: FaBook,
      heading: "Exam Only",
      type: {
        individual: "Individual",
        icon: FaCircle,
        team: "team",
      },
      price: "$69",
      btn: {
        btntext: "Buy Now",
        btnicon: FaArrowRight,
      },
      info: {
        tickicon: FaCheck,
        title: "Preparation Guide Access",
        exicon: FaExclamation,
      },
      info2: {
        tickicon: FaCheck,
        title: "Discord Community Access",
        exicon: FaExclamation,
      },
      info3: {
        tickicon: FaCheck,
        title: "Junior Exam Voucher",
        exicon: FaExclamation,
      },

      learnmorebtn: {
        btntext: "Learn More",
        plusicon: FaPlus,
      },
    },

    second2: {
      cardtitle: "BEST VALUE",
      title: "Junior",
      icon: FaRegEdit,
      heading: "Exam & Preparation bundle",
      type: {
        individual: "Individual",
        icon: FaCircle,
        team: "team",
      },
      price: "$99",
      btn: {
        btntext: "Buy Now",
        btnicon: FaArrowRight,
      },
      info: {
        tickicon: FaCheck,
        title: "Preparation Guide Access",
        exicon: FaExclamation,
      },
      info2: {
        tickicon: FaCheck,
        title: "Discord Community Access",
        exicon: FaExclamation,
      },
      info3: {
        tickicon: FaCheck,
        title: "Junior Exam Voucher",
        exicon: FaExclamation,
      },
      info4: {
        tickicon: FaCheck,
        title: "Self-Study Training Access",
        exicon: FaExclamation,
      },

      info5: {
        tickicon: FaCheck,
        title: "Free Retake",
        exicon: FaExclamation,
      },
      info6: {
        tickicon: FaCheck,
        title: "Trail Exam",
        exicon: FaExclamation,
      },
      learnmorebtn: {
        btntext: "Learn More",
        plusicon: FaPlus,
      },
    },

    third3: {
      title: "Mid-Level",
      icon: FaGhost,
      subtitle: "Includes 3 Live Workshops",
      heading: "Exam, Preparation & Bootcamp bundle",
      type: {
        individual: "Individual",
        icon: FaCircle,
        team: "team",
      },
      price: "$99",
      btn: {
        btntext: "Buy Now",
        btnicon: FaArrowRight,
      },
      info: {
        tickicon: FaCheck,
        title: "Preparation Guide Access",
        exicon: FaExclamation,
      },
      info2: {
        tickicon: FaCheck,
        title: "Discord Community Access",
        exicon: FaExclamation,
      },
      info3: {
        tickicon: FaCheck,
        title: "Junior Exam Voucher",
        exicon: FaExclamation,
      },
      info4: {
        tickicon: FaCheck,
        title: "Self-Study Training Access",
        exicon: FaExclamation,
      },

      info5: {
        tickicon: FaCheck,
        title: "Free Retake",
        exicon: FaExclamation,
      },
      info6: {
        tickicon: FaCheck,
        title: "Trail Exam",
        exicon: FaExclamation,
      },
      info7: {
        tickicon: FaCheck,
        title: "ntensive Bootcamp Training",
        exicon: FaExclamation,
      },
      info8: {
        tickicon: FaCheck,
        title: "ntensive Bootcamp Training",
        exicon: FaExclamation,
      },
      learnmorebtn: {
        btntext: "Learn More",
        plusicon: FaPlus,
      },
    },
  },
  // Senior Level
  {
    first3: {
      title: "Senior",
      icon: FaBook,
      heading: "Exam Only",
      type: {
        individual: "Individual",
        icon: FaCircle,
        team: "team",
      },
      price: "$69",
      btn: {
        btntext: "Buy Now",
        btnicon: FaArrowRight,
      },
      info: {
        tickicon: FaCheck,
        title: "Preparation Guide Access",
        exicon: FaExclamation,
      },
      info2: {
        tickicon: FaCheck,
        title: "Discord Community Access",
        exicon: FaExclamation,
      },
      info3: {
        tickicon: FaCheck,
        title: "Junior Exam Voucher",
        exicon: FaExclamation,
      },

      learnmorebtn: {
        btntext: "Learn More",
        plusicon: FaPlus,
      },
    },

    second3: {
      cardtitle: "BEST VALUE",
      title: "Senior",
      icon: FaGamepad,
      heading: "Exam & Preparation bundle",
      type: {
        individual: "Individual",
        icon: FaCircle,
        team: "team",
      },
      price: "$99",
      btn: {
        btntext: "Buy Now",
        btnicon: FaArrowRight,
      },
      info: {
        tickicon: FaCheck,
        title: "Preparation Guide Access",
        exicon: FaExclamation,
      },
      info2: {
        tickicon: FaCheck,
        title: "Discord Community Access",
        exicon: FaExclamation,
      },
      info3: {
        tickicon: FaCheck,
        title: "Junior Exam Voucher",
        exicon: FaExclamation,
      },
      info4: {
        tickicon: FaCheck,
        title: "Self-Study Training Access",
        exicon: FaExclamation,
      },

      info5: {
        tickicon: FaCheck,
        title: "Free Retake",
        exicon: FaExclamation,
      },
      info6: {
        tickicon: FaCheck,
        title: "Trail Exam",
        exicon: FaExclamation,
      },
      learnmorebtn: {
        btntext: "Learn More",
        plusicon: FaPlus,
      },
    },

    third3: {
      title: "Senior",
      icon: FaRebel,
      subtitle: "Includes 3 Live Workshops",
      heading: "Exam, Preparation & Bootcamp bundle",
      type: {
        individual: "Individual",
        icon: FaCircle,
        team: "team",
      },
      price: "$99",
      btn: {
        btntext: "Buy Now",
        btnicon: FaArrowRight,
      },
      info: {
        tickicon: FaCheck,
        title: "Preparation Guide Access",
        exicon: FaExclamation,
      },
      info2: {
        tickicon: FaCheck,
        title: "Discord Community Access",
        exicon: FaExclamation,
      },
      info3: {
        tickicon: FaCheck,
        title: "Junior Exam Voucher",
        exicon: FaExclamation,
      },
      info4: {
        tickicon: FaCheck,
        title: "Self-Study Training Access",
        exicon: FaExclamation,
      },

      info5: {
        tickicon: FaCheck,
        title: "Free Retake",
        exicon: FaExclamation,
      },
      info6: {
        tickicon: FaCheck,
        title: "Trail Exam",
        exicon: FaExclamation,
      },
      info7: {
        tickicon: FaCheck,
        title: "ntensive Bootcamp Training",
        exicon: FaExclamation,
      },
      info8: {
        tickicon: FaCheck,
        title: "ntensive Bootcamp Training",
        exicon: FaExclamation,
      },
      learnmorebtn: {
        btntext: "Learn More",
        plusicon: FaPlus,
      },
    },
  },
];

export const footer = [
  {
    img: reacticon2,
    title: "Certification of competence for React",
    link: {
      heading: "Reach out on Social Media",
      twitter: FaTwitter,
      linkedin: FaLinkedin,
      facebook: FaFacebook,
      youtube: FaYoutube,
      instagram: FaInstagram,
    },
  },
  {
    title1: "Steps to Certification",
    title2: "Certificates",
    title3: "Pricing",
    title4: "Cast your Vote",
  },
  {
    title1: "Contact Us",
    title2: "Terms & Conditions",
    title3: "Privacy Policy",
    title4: "Help Center",
    title5: "Blog",
  },
];
