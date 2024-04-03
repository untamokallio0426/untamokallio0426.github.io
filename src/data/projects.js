import { SERVER_URL } from "../config";

const data = [
  {
    id: '1',
    title: 'Credit Application',
    description:
      'Credit application Form Validation',
    image: {
      src: SERVER_URL + '/credit-application.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/untamokallio0426/credit-application-jsforce',
    },
    technologies: [
      '#typescript',
      '#Node.js',
      '#Express',
      '#Angular 12',
      '#JSforce',
    ],
  },
  {
    id: '2',
    title: 'Rabid Reality',
    description:
      'Non-profit streaming video on demand service that offers a variety of content',
    image: {
      src: SERVER_URL + '/rabid-reality.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://rabidreality.com/',
    },
    technologies: [
      '#TypeScript',
      '#Node.js',
      '#NestJS',
      '#PostgreSQL',
      '#Prisma',
      '#GraphQL',
      '#React',
      '#Next.js',
      '#SCSS',
    ],
  },
  {
    id: '3',
    title: 'LiveScoreBet',
    description:
      'Online betting website that offers live betting and online sports odds',
    image: {
      src: SERVER_URL + '/livescorebet.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://www.livescorebet.com/uk/',
    },
    technologies: [
      '#PHP',
      '#JavaScript',
      '#Laravel 9',
      '#React',
      '#Bootstrap',
      '#Payment Gateway',
      '#API Integration',
    ],
  },
  {
    id: '4',
    title: 'Slot Game',
    description:
      'A simple slot machine game with three reels',
    image: {
      src: SERVER_URL + '/slot-game.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/untamokallio0426/slot-game-sample',
    },
    technologies: [
      '#Javascript',
      '#Node.js',
    ],
  },
  {
    id: '5',
    title: 'Billfox',
    description:
      'The clever billing software for osteopathic alternative practitioners',
    image: {
      src: SERVER_URL + '/billfox.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://billfox.de/',
    },
    technologies: [
      '#PHP',
      '#JavaScript',
      '#Laravel 8',
      '#Vue 2',
      '#Vuetify 2',
    ],
  },
  {
    id: '6',
    title: 'Chat App',
    description:
      'Socket.io realtime web chat app',
    image: {
      src: SERVER_URL + '/chat-app.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      repo: 'https://github.com/untamokallio0426/socket-chat-app',
    },
    technologies: [
      '#JavaScript',
      '#Node.js',
      '#Express',
      '#MongoDB',
      '#React',
      '#Socket.io',
    ],
  },
  {
    id: '7',
    title: 'Hepsiburada',
    description:
      'One of the largest online shopping site in Turkey',
    image: {
      src: SERVER_URL + '/hepsiburada.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://www.hepsiburada.com/',
    },
    technologies: [
      '#MERN',
      '#Bootstrap',
      '#Backbone.js',
      '#Google Analytics',
      '#Facebook API',
      '#Youtube API',
      '#SEO',
      '#Nginx'
    ],
  },
  {
    id: '8',
    title: 'QETC',
    description:
      'The website of QETC Education and Training Consultancy SDN',
    image: {
      src: SERVER_URL + '/qetc.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://qetc.com.my/',
    },
    technologies: [
      '#JavaScript',
      '#Node.js',
      '#Express',
      '#MySQL',
      '#Sequelize',
      '#React',
      '#Tailwind CSS',
    ],
  },
  {
    id: '9',
    title: 'Cryptobase',
    description:
      'Simple Create React App',
    image: {
      src: SERVER_URL + '/cryptobase.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://cryptobase-5c326.web.app/',
      repo: 'https://github.com/untamokallio0426/crypto-base-app',
    },
    technologies: [
      '#JavaScript',
      '#React',
      '#Firebase',
      '#Crypto',
    ],
  },
  {
    id: '10',
    title: 'Web Wallet',
    description:
      'Cryptocurrency Wallet',
    image: {
      src: SERVER_URL + '/web-wallet.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://wallet-jnmm.onrender.com',
      repo: 'https://github.com/untamokallio0426/web-wallet',
    },
    technologies: [
      '#Typescript',
      '#Next',
      '#Material UI',
    ],
  },
  {
    id: '11',
    title: 'LuckyDreams',
    description:
      'Online casino that offers a variety of games, including online slots, table games, and live casino games',
    image: {
      src: SERVER_URL + '/luckydreams.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://www.luckydreams.com/',
    },
    technologies: [
      '#JavaScript',
      '#Node.js',
      '#Express',
      '#MySQL',
      '#Sequelize',
      '#Next.js',
      '#Tailwind CSS',
      '#API Integration',
      '#Payment Gateway',
    ],
  },
  {
    id: '12',
    title: 'USDFX Affiliate System',
    description:
      'The website which aims to revolutionize fintech and web3 to facilitate B2B payments',
    image: {
      src: SERVER_URL + '/usdfx.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
    links: {
      site: 'https://usdfx.org',
    },
    technologies: [
      '#JavaScript',
      '#Node.js',
      '#Express',
      '#MySQL',
      '#React',
      '#Material UI',
      '#Blockchain',
      '#Web3.js',
    ],
  },
];

export default data;
