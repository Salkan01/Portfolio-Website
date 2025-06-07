import React from 'react';
import styles from '../styles/App.module.css';

interface ProjectsProps {
  t: (key: string) => string;
}

interface Project {
  title: string;
  tech: string[];
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Birthday Invite',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description:
      'A themed birthday invite page using HTML and CSS for layout and design.',
    link: 'https://github.com/Salkan01/birthday-invite',
    image: 'https://via.placeholder.com/300x200.png?text=Birthday+Invite',
  },
  {
    title: 'Movie Ranking',
    tech: ['React'],
    description: 'A React project that ranks favorite movies.',
    link: 'https://github.com/Salkan01/movie-ranking',
    image: 'https://via.placeholder.com/300x200.png?text=Movie+Ranking',
  },
  {
    title: 'Portfolio Website',
    tech: ['TypeScript', 'React'],
    description: 'This portfolio built with React and TypeScript.',
    link: 'https://github.com/Salkan01/portfolio-website',
    image: 'https://via.placeholder.com/300x200.png?text=Portfolio',
  },
];

const ProjectsSection: React.FC<ProjectsProps> = ({ t }) => (
  <section id="projects" className={styles.section}>
    <h2>{t('featured')}</h2>
    <div className={styles.projectGrid}>
      {projects.map(project => (
        <a
          key={project.title}
          className={styles.projectCard}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <div className={styles.tech}>
            {project.tech.map(t => (
              <span key={t} className={styles.badge}>{t}</span>
            ))}
          </div>
          <p className={styles.desc}>{project.description}</p>
        </a>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
