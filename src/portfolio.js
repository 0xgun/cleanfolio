const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://0xgun.github.io/cleanfolio',
  title: 'gm',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ganeshan M',
  role: 'Front End Developer',
  description:
  "I'm a Front End Developer with a passion for creating scalable and responsive web applications. I'm dedicated to staying current with the latest technologies and eager to contribute my skills to exciting projects in the field of web development.",
  resume: 'https://drive.google.com/file/d/1EtIolgA9V3eoO2KlJ1ANvzbIAwGxp6ib/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/mganeshan/',
    github: 'https://github.com/0xgun',
    twitter: 'https://twitter.com/0xgunm',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'CRYPTOKET',
    description:
      'CryptoKet is a Web3 Full stack NFT marketplace where users can mint their pictures as NFT, list their NFTs for sale, and as well buy NFTs from other users.',
    stack: ['React', 'CSS', 'Solidity','IPFS'],
    sourceCode: 'https://github.com/0xgun/NFT-MarketPlace',
    livePreview: 'https://github.com/0xgun/NFT-MarketPlace',
  },
  {
    name: 'GITHUB-EXPLORER',
    description:
      'Developed a dynamic React application that interacts with the GitHub API to enable users to search for GitHub users and showcase their repositories. Allowing users to effortlessly arrange search results by stars or forks, enhancing the exploration experience.',
    stack: ['React', 'REST API', 'CSS' ,'Material UI'],
    sourceCode: 'https://github.com/0xgun/github-explorer',
    livePreview: 'https://github-explorer-orpin.vercel.app/',
  },
  {
    name: 'MOVIE SURF',
    description:
      'Movie Surf is a fully functional, flexible and convenient application and a user friendly interface which provides a good user experience for watching movies',
    stack: ['Python ', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/0xgun/movieapp',
    livePreview: 'https://github.com/0xgun/movieapp',
  },
  {
    name: 'DASH STOCK',
    description:
      'Web based stock Visualizer and Forecasting',
    stack: ['Python ', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/0xgun/dash-stocks',
    livePreview: 'https://github.com/0xgun/dash-stocks',
  },
  {
    name: 'Empoyee DashBoard',
    description:
      "This is a simple employee dashboard that allows you to view the employee data in a table , filter, and sort the employee's data according to their attributes i.e Name,Age,Salary.",
    stack: ['Python ', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/0xgun/employee-dashboard',
    livePreview: 'https://github.com/0xgun/employee-dashboard',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'Python',
  'Jest',
  'Java',
  'SQL',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ganeshanmadesh36@gmail.com',
}


export { header, about, projects, skills, contact }
