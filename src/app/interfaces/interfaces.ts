export interface Interfaces {}

export const projectCriterion = {
  id: 1,
  client: 'Criterion',
  location: 'Norwalk, CT',
  timeframe: 'December 2021 - May 2022',
  project: 'Franchise Solutions platform',
  description:
    'Criterion owns five main service branches focused to provide an all-in-one solution through automation and control software tools. Franchise is a branch of solutions that offers different means of improving day to day operations, from automating payrolls, to optimizing employee recruitment process.',
  responsabilities: [
    'Part of the team responsible of the front-end development of the web application using Angular 10 as well as HTML and SASS.',
    'Developed numerous different UI pages for various modules in the application, using angular material templates, such as steppers and dashboards developed as material cards.',
    'Set up Guards and routing files to control the user flow based on authentication, using local storage as a means to save user data.',
    "Implemented authentication strategies using Googles OAuth2's API.",
    'The team managed the entire code versioning through GitHub.',
  ],
  capture: '../../../assets/criterion.PNG',
  videoPreview: null
  
};
export const projectChemquest = {
  id: 2,
  client: 'Fairfield University',
  location: 'Fairfield, CT',
  timeframe: 'June 2020 - November 2021',
  project: 'Chemquest Mobile App',
  description:
    'Chemquest is an experimental mobile app designed to offer hand drawn chemical recognition features to the user, by using several machine learning techniques to fine tune the user experience and prediction accuracy. ',
  responsabilities: [
    'Involved in the development of the front end of the application using Angular 9, Ionic 3 and Capacitor 2. The entirety of the project was written in Typescript using several bootstrap UI components.',
    'Participated in the development of the backend engine using Python and Django, along with a cloud deployment on AWS and a MySQL integration to the backend.',
    "Developed user authentication by using Django's tokenization.",
    'Managed the deployment of the app on both Apple Appstore and Google Play store for every release (Alpha, Beta, production release).',
    'Worked as a team lead on a cluster of three other developers who oversaw machine learning research and web development, the Team’s task was managed on Jira and Agile scrum methodology was implemented throughout the project.',
    'The versioning of the project was licensed by Fairfield University and all the versioning was managed through GIT.',
  ],
  capture: '../../../assets/chemquest.PNG',
  videoPreview: null
};
export const projectCuponcity = {
  id: 3,
  client: 'Cuponcity',
  location: 'Quito, Ecuador',
  timeframe: 'August 2018 - January 2020',
  project: 'Cuponcity Front End Interface',
  description:
    'Cuponcity delivers an E-commerce all-in-one solution to connect users with a wide variety of businesses from all around Ecuador through offering time bound offers in the form of coupons. The platform allows users to create accounts and purchase products and services organized by category.',
  responsabilities: [
    'Involved in the front-end development of the web application using Angular, angular directives, two-way binding, ES6, reusable components.',
    'Created several user-oriented interfaces using angular material and bootstrap boosting the overall experience on the website. Pagination and carrousels were some of the features added using the mentioned libraries.',
    'Participated in the implementation of user authentication via tokenization.',
    'The code was managed by a decentralized system using GIT.',
    'Took part in weekly agile/SCRUM meetings each week to review and redistribute the workload among the developers.',
  ],
  capture: '../../../assets/cuponcity.PNG',
  videoPreview: null
};
export const projectBlackCat = {
  id: 4,
  client: 'Black Cat',
  location: 'Fully Remote',
  timeframe: 'April 2020 - June 2021',
  project: 'Cat Manga',
  description:
    'Community driven development project, CatManga is a startup with the aim to provide a platform where readers could access several Japanese reading materials while providing a fluid and modern user experience.',
  responsabilities: [
    'Involved in the front-end development of the web application using React 16, typescript, HTML, SCSS, and bootstrap.',
    'Constant engagement with the backend team to integrate the Mongo powered backend into the front end as well as helping provide third-party bot developers tools to make use of said APIs.',
    'Formed part of a team of fifteen developers to give maintenance to the webpage as well as releasing community driven feature implementation on a weekly basis.',
  ],
  capture: '../../../assets/catmanga.PNG',
  videoPreview: [{
    title: 'Preview 1 out of 2',
    url:'../../assets/catmangapreview.mp4'
  }, 
  {
    title: 'Preview 2 out of 2',
    url: '../../assets/catmangapreview2.mp4'
  }]
};

export const projects = {
  All: [projectCriterion, projectChemquest, projectCuponcity, projectBlackCat],
  Angular: [projectCriterion, projectChemquest, projectCuponcity],
  React: [projectBlackCat],
  Python: [projectChemquest],
  'Community Driven': [projectBlackCat],
};
