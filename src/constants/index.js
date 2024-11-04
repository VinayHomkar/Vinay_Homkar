export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const testimonials = [
  {
    testimonial:
      "We were struggling with our project's design, but Vinay's input and execution made it not only functional but stunning!",
    name: 'Darshan SN',
    designation: 'Project Partner',
    company: 'ImageAIPro',
    image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
  },
];

export const myProjects = [
  {
    title: 'Chat-APP',
    desc: 'A real-time chat application enables instant communication through text messages, providing seamless interactions and features like chat history typing indicators with sound notification.',
    subdesc:
      'Built with ReactJS for a responsive interface, Tailwind CSS for stylish design, Socket.io for instant messaging, and MongoDB for secure data storage.This app delivers an efficient and engaging chat experience.',
    href: 'https://github.com/VinayHomkar/CHAT-APP',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'SocketIO',
        path: '/assets/socket.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongo.png',
      },
    ],
  },
  {
    title: 'My Portfolio',
    desc: 'My personal portfolio as a software developer showcases my skills. It presents my projects in a user-friendly format, making it easy for potential clients and employers to explore my expertise.',
    subdesc:
      'In developing the portfolio, I used React.js to create a dynamic interface and integrated Three.js for engaging 3D graphics and animations. Email.js powers a contact form for seamless communication. This blend of technologies highlights my technical abilities and passion for creating engaging web experiences.',
    href: 'https://vinayhomkar.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Three.js',
        path: 'assets/threejs.png',
      },
      {
        id: 3,
        name: 'Email.js',
        path: '/assets/emailjs.png',
      },
    ],
  },
  {
    title: 'ImageAIPro',
    desc: 'ImageAIPro is a marketplace where people can buy, sell, and share AI prompts. It provides customized experiences for users, sellers, and admins. Users can browse a collection of prompts, sellers can set up profiles and track their sales, and admins manage accounts and ensure quality.',
    subdesc:
      'Developed with Next.js, Clerk, Node.js, MongoDB, Prisma, and TypeScript, ImageAIPro ensures seamless transactions and robust account management, promoting global collaboration in AI prompt solutions.',
    href: 'http://imageaipro-darshan-s-ns-projects.vercel.app',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.png',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: 'assets/typescript.png',
      },
      {
        id: 3,
        name: 'Clerk',
        path: '/assets/clerk.png',
      },
      {
        id: 4,
        name: 'Prisma',
        path: '/assets/prisma.png',
      },
      {
        id: 5,
        name: 'MongoDB',
        path: '/assets/mongo.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    //icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    //icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];
