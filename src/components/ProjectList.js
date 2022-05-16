import classes from '../styles/ProjectList.module.css';

const projects = [
  {
    id: 1,
    name: 'Rabbi Jinnat - Portfolio',
    excerpt:
      'This is the portfolio of a wordpress and php developer. Made an one page web application using React.js to showcase his works.',
    live_link: 'https://rabbi-ginnat.netlify.app/',
    github_link: '',
    tags: ['UI', 'React', 'CSS3'],
  },
  {
    id: 2,
    name: 'Social media UI',
    excerpt:
      'This is a social media UI made using React.js, Next.js and Tailwind CSS. Its under development.',
    live_link: 'https://socio-trend-v2.vercel.app/',
    github_link: '',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Redux'],
  },
  {
    id: 3,
    name: 'Crowd Bird',
    excerpt:
      'This is a crowdfunding UI made using React.js, Next.js and Tailwind CSS. Its under development to be a Fullstack app.',
    live_link: 'https://crowd-bird.vercel.app/',
    github_link: '',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Redux'],
  },
  {
    id: 4,
    name: 'Booknow',
    excerpt:
      'Book now is a hotel room booking web application made using React.js, Next.js, Tailwind CSS and Redux',
    live_link: 'https://booknow.vercel.app/',
    github_link: 'https://github.com/MostofaNobiTanveer/Booknow',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Redux'],
  },
  {
    id: 5,
    name: 'JavaScript Covid Tracker',
    excerpt:
      'Modern javascript build covid tracker. Fetched Informations from API. Here user can observe the covid stats of all countries.',
    live_link: 'https://js-covid-19-tracker.netlify.app/',
    github_link: 'https://github.com/MostofaNobiTanveer/js-covid-tracker',
    tags: ['CSS3', 'ES6', 'API'],
  },
  {
    id: 6,
    name: 'Coders Club React UI',
    excerpt:
      'A React and vanilla css frontend project. Build to select from bunch of well known industry experts in order to create a free online platform',
    live_link: 'https://coders-club-react.netlify.app/',
    github_link: 'https://github.com/MostofaNobiTanveer/coders-club-react',
    tags: ['UI', 'React', 'CSS3'],
  },
  {
    id: 7,
    name: 'JavaScript Youtube mini',
    excerpt:
      'A modern javascript and API project. Used Google API to fetch and display searched youtube video by users.',
    live_link: 'https://js-youtube.netlify.app/',
    github_link: 'https://github.com/MostofaNobiTanveer/js-youtube-mini',
    tags: ['UL', 'ES6', 'Google API'],
  },
  {
    id: 8,
    name: 'Bootstrap Udemy mini',
    excerpt:
      'Bootstrap based fully responsive frontend project. Used only css framework Bootstrap and build udemy clone.',
    live_link: 'https://bs-udemy.netlify.app/',
    github_link: 'https://github.com/MostofaNobiTanveer/udemy',
    tags: ['UI', 'Bootstrap', 'Responsive'],
  },
  {
    id: 9,
    name: 'Bootstrap e-com UI',
    excerpt:
      'Bootstrap based frontend project. Used only css framework Bootstrap and build a fully responsive e-commerce project.',
    live_link: 'https://mostofanobitanveer.github.io/e-store/',
    github_link: 'https://github.com/MostofaNobiTanveer/e-store',
    tags: ['UI', 'Bootstrap', 'Responsive'],
  },
];

const ProjectsSlider = () => {
  return (
    <section className={classes.projects__section}>
      <div className="container">
        <div className={classes.projects__title}>
          <p>
            <span>other </span>
            <br />
            <span className="outline">projects</span>
          </p>
        </div>
        <div className={classes.projects}>
          {projects.map(
            ({ id, name, excerpt, tags, live_link, github_link }) => {
              return (
                <article key={id} className={classes.project}>
                  <div className={classes.project__top}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-text)"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <title>Folder</title>
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <div className={classes.project__links}>
                      <a
                        href={live_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                      <a
                        href={github_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <title>GitHub</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className={classes.project__body}>
                    <p className={classes.project__title}>{name}</p>
                    <p className={classes.project__excerpt}>{excerpt}</p>
                  </div>
                  <div className={classes.project__footer}>
                    {tags.map((t, i) => (
                      <p key={i} className={classes.tags}>
                        {t}
                      </p>
                    ))}
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
