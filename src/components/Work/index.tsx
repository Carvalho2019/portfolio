import Image from 'next/image';
import styles from './styles.module.scss';
import { useState, useMemo } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'design';
  image: string;
  url: string;
  tech: string[];
  role: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 'fiec',
    title: 'FIEC — Shared Economy Platform',
    description: 'A platform connecting service providers with customers in a shared economy model. Built with React, Node.js, and PostgreSQL.',
    category: 'web',
    image: '/images/projects/fiec.jpeg',
    url: 'https://economia-compartilhada.vercel.app/',
    tech: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    role: 'Full-stack Developer',
    year: '2024',
  },
  {
    id: 'arranja-web',
    title: 'Arranja&iacute; — Service Marketplace (Web)',
    description: 'Consumer-facing marketplace for local services. React frontend with real-time booking and payment integration.',
    category: 'web',
    image: '/images/projects/arranja_site.jpeg',
    url: 'https://leading-page-arranjai.vercel.app/',
    tech: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
    role: 'Frontend Lead',
    year: '2023',
  },
  {
    id: 'arranja-back',
    title: 'Arranja&iacute; — Back Office System',
    description: 'Admin dashboard for managing service providers, bookings, payments, and analytics. Role-based access control.',
    category: 'web',
    image: '/images/projects/arranja_back.jpeg',
    url: 'https://backofficearranjai.vercel.app/auth/signin',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    role: 'Full-stack Developer',
    year: '2023',
  },
  {
    id: 'espacog5',
    title: 'Espa&ccedil;o G5 — Coworking Platform',
    description: 'Booking and management system for coworking spaces. Real-time availability, membership management, and invoicing.',
    category: 'web',
    image: '/images/projects/espacog5.jpeg',
    url: 'https://espacog5.com/',
    tech: ['React', 'PHP', 'Laravel', 'MySQL'],
    role: 'Full-stack Developer',
    year: '2023',
  },
  {
    id: 'fgacademy',
    title: 'FG Academy — Learning Platform',
    description: 'E-learning platform with course management, video streaming, progress tracking, and certificate generation.',
    category: 'web',
    image: '/images/projects/fgacademy.jpeg',
    url: 'https://fgacademy.ao/',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
    role: 'Full-stack Developer',
    year: '2022',
  },
  {
    id: 'social',
    title: 'Social Feed Prototype',
    description: 'A social media feed prototype with real-time updates, infinite scroll, and optimistic UI updates.',
    category: 'web',
    image: '/images/projects/rede_social.jpeg',
    url: 'https://dapper-selkie-0dbfea.netlify.app/',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    role: 'Frontend Developer',
    year: '2022',
  },
  {
    id: 'akiu',
    title: 'Akiu — E-commerce Platform',
    description: 'Full-featured e-commerce with cart, checkout, order management, and admin panel. Integrated payment gateways.',
    category: 'web',
    image: '/images/projects/akiu.jpeg',
    url: 'https://super-paprenjak-463334.netlify.app/',
    tech: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
    role: 'Full-stack Developer',
    year: '2022',
  },
  {
    id: 'dtmoney',
    title: 'DT Money — Finance Tracker',
    description: 'Personal finance tracker with transaction categorization, budgets, reports, and data visualization.',
    category: 'web',
    image: '/images/projects/dtmoney.jpeg',
    url: 'https://65a39758e7ac41552ac30c02--beamish-vacherin-08bca6.netlify.app/',
    tech: ['React', 'TypeScript', 'Context API', 'Styled Components'],
    role: 'Frontend Developer',
    year: '2021',
  },
  {
    id: 'dashgo',
    title: 'Dash GO — Admin Dashboard',
    description: 'Comprehensive admin dashboard template with charts, tables, forms, and authentication flows.',
    category: 'web',
    image: '/images/projects/dashgo.jpeg',
    url: 'https://lighthearted-alpaca-f33b45.netlify.app/dashboard',
    tech: ['React', 'Chakra UI', 'React Query', 'ApexCharts'],
    role: 'Frontend Developer',
    year: '2021',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' },
] as const;

export function Work() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'design'>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className={styles.container} id="work" aria-labelledby="work-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Selected work</p>
        <h2 id="work-title" className={styles.title}>
          Projects I&apos;ve built and shipped
        </h2>
        <p className={styles.description}>
          A selection of production applications. Each solved a real business problem.
        </p>
      </header>

      <nav className={styles.filters} aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.active : ''}`}
            onClick={() => setActiveFilter(cat.id as typeof activeFilter)}
            aria-pressed={activeFilter === cat.id}
            type="button"
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <div className={styles.grid} role="list">
        {filteredProjects.map((project, index) => (
          <article key={project.id} className={styles.card} role="listitem" style={{ '--index': `${index}` } as React.CSSProperties}>
            <div className={styles.cardImageWrapper}>
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewProject}
                  aria-label={`View ${project.title} live`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>View project</span>
                </a>
              </div>
              <span className={styles.cardCategory}>{project.category}</span>
            </div>

            <div className={styles.cardContent}>
              <header className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <div className={styles.cardMeta}>
                  <span className={styles.cardRole}>{project.role}</span>
                  <span className={styles.cardYear}>{project.year}</span>
                </div>
              </header>

              <p className={styles.cardDescription}>{project.description}</p>

              <ul className={styles.cardTech} role="list" aria-label="Technologies used">
                {project.tech.map((t, i) => (
                  <li key={i} className={styles.techTag}>
                    <code>{t}</code>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className={styles.empty} role="status">No projects in this category yet.</p>
      )}
    </section>
  );
}
