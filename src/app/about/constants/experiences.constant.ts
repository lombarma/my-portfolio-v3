import { Experience } from '../types/experience.type';

export const EXPERIENCES: Experience[] = [
  {
    title: 'Front-end Engineer',
    company: 'Ekino',
    companyUrl: 'https://www.ekino.com/',
    startDate: 'SEP 2023',
    endDate: 'Present',
    isCurrent: true,
    listItems: [
      'Developing Angular applications aligned with industry best practices',
      'Working with design systems and implementing pixel-perfect UIs based on Figma mockups',
      'Integration of RESTful APIs and managed application state using RxJS and Observables',
      'Writing unit tests using Jest to ensure code reliability and prevent regressions',
      'Working with Nx as a monorepo tool',
    ],
    isListing: true,
  },
  {
    title: 'IT Engineer',
    company: 'Airbus Helicopters',
    companyUrl: 'https://www.airbus.com/en/products-services/helicopters',
    startDate: 'SEP 2022',
    endDate: 'SEP 2023',
    isCurrent: false,
    listItems: [
      'Automated a monthly database cleanup process, improving insertion and deletion operations by 20%',
      'Designed and deployed a web-based solution that automated a repetitive weekly process, enhancing reliability and saving hours of manual work',
    ],
    isListing: true,
  },
];

export const EDUCATIONS: Experience[] = [
  {
    title: 'International Program in Computer Science',
    company: 'UCSD - University of California San Diego',
    companyUrl: 'https://ucsd.edu/',
    startDate: 'SEP 2024',
    endDate: 'DEC 2024',
    isCurrent: false,
    description:
      'International program specialized in data structures and algorithms for data science. Ranked #18 worlwide - Shanghai Ranking.',
    isListing: false,
  },
  {
    title: 'M.SC. in Computer Engineering',
    company: 'ESIEE Paris',
    companyUrl: 'https://www.esiee.fr/',
    startDate: '2020-01-09',
    endDate: 'Present',
    isCurrent: true,
    description:
      'Major in Computer Science and Software Engineering. Ranked #7 in France - LeFigaro Etudiant.',
    isListing: false,
  },
];
