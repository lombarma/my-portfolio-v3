import { Card } from '../types/card.type';

export const PROJECTS: Card[] = [
  {
    title: 'F1 Data Visualization',
    description:
      'Interactive data visualization platform for Formula 1. Made with an ETL pipeline to extract, transform, and load data from various sources.',
    tags: [
      'Python',
      'Pandas',
      'Airflow',
      'Streamlit',
      'Data Engineering',
      'Docker',
      'PostgreSQL',
    ],
    picture: {
      path: 'assets/images/f1-insights-dashboard.webp',
      altDescrption: 'F1 Data Visualization Screenshot',
    },
    repoUrl: 'https://github.com/lombarma/f1_data_project',
  },
  {
    title: 'Portfolio Generator',
    description:
      'Dynamic portfolio generator that creates personalized portfolios based on user input, showcasing skills, experiences and projects.',
    tags: ['Angular', 'NodeJs(express)', 'PostgreSQL', 'Docker', 'Kubernetes'],
    picture: {
      path: 'assets/images/portfolio-generator.webp',
      altDescrption: 'Portfolio Generator Screenshot',
    },
    repoUrl: 'https://github.com/lombarma/portfolio-generator-v2',
  },
  {
    title: 'Nexus - Intra school Social Network',
    description:
      'Social networking platform for students, allowing association, event organization, and communication through posts and messages.',
    tags: ['Python(Django)', 'MySQL', 'HTML/CSS', 'Project Management'],
    picture: {
      path: 'assets/images/social-network.webp',
      altDescrption: 'Social Network Screenshot',
    },
    repoUrl: 'https://github.com/MathisPipart/Nexus',
  },
  {
    title: 'House prices prediction',
    description:
      'Machine learning model that predicts house prices based on various features such as location, size, and amenities.',
    tags: ['Python', 'Machine Learning', 'Data preprocessing', 'Keras'],
    picture: {
      path: 'assets/images/house-prices.webp',
      altDescrption: 'House Prices Prediction Screenshot',
    },
    repoUrl: 'https://github.com/lombarma/HousePricePredicition',
    demoUrl:
      'https://housepricepredicition-fsoerznfcpwkvgv5nxconr.streamlit.app/',
  },
  {
    title: 'Meteo Application',
    description:
      'Weather forecasting application that provides real-time weather updates, forecasts, and alerts based on user location.',
    tags: ['Angular', 'API Integration', 'Responsive Design'],
    picture: {
      path: 'assets/images/weather-app.webp',
      altDescrption: 'Weather App Screenshot',
    },
    repoUrl: 'https://github.com/lombarma/my-weather-app-v2',
    demoUrl: 'https://weather.maximelombardo.com',
  },
  {
    title: 'Handwriting Recognition',
    description:
      'Deep learning model that recognizes handwritten characters and digits, trained on a large dataset of handwritten samples.',
    tags: ['Python', 'TensorFlow', 'Image Processing', 'Deep Learning'],
    picture: {
      path: 'assets/images/handwritten-digit-recognition.webp',
      altDescrption: 'Handwriting Recognition Screenshot',
    },
    repoUrl: 'https://github.com/lombarma/DLProject',
  },
];
