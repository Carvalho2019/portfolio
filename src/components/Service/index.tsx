import styles from './styles.module.scss';

const services = [
  {
    title: 'Web Application Development',
    description: 'End-to-end development of scalable web applications using React, Next.js, Node.js, and modern backend technologies. From MVP to production-ready systems.',
    deliverables: [
      'Responsive, accessible frontend interfaces',
      'RESTful APIs and GraphQL endpoints',
      'Database design and optimization',
      'Authentication & authorization systems',
      'Automated testing & CI/CD pipelines',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    icon: 'webapp',
  },
  {
    title: 'API Design & Integration',
    description: 'Designing clean, well-documented APIs and integrating third-party services. Focus on developer experience, versioning, and reliability.',
    deliverables: [
      'OpenAPI/Swagger documentation',
      'Rate limiting & caching strategies',
      'Webhook implementation',
      'Payment gateway integration (Stripe, PayPal)',
      'Third-party API consumption & normalization',
    ],
    tech: ['REST', 'GraphQL', 'OpenAPI', 'Stripe', 'AWS', 'Redis'],
    icon: 'api',
  },
  {
    title: 'UI/UX Implementation',
    description: 'Translating designs into pixel-perfect, accessible interfaces. Component libraries, design systems, and frontend architecture.',
    deliverables: [
      'Component library / design system',
      'WCAG 2.1 AA compliance',
      'Responsive & cross-browser testing',
      'Animation & micro-interactions',
      'Performance optimization (Core Web Vitals)',
    ],
    tech: ['Tailwind CSS', 'Chakra UI', 'Framer Motion', 'Storybook', 'Figma'],
    icon: 'ui',
  },
  {
    title: 'DevOps & Cloud Infrastructure',
    description: 'Setting up reliable deployment pipelines, cloud infrastructure, and monitoring. Container orchestration and serverless architectures.',
    deliverables: [
      'Docker containerization',
      'CI/CD with GitHub Actions / GitLab CI',
      'AWS / Vercel / Netlify deployment',
      'Infrastructure as Code (Terraform)',
      'Logging, monitoring & alerting',
    ],
    tech: ['Docker', 'AWS', 'GitHub Actions', 'Terraform', 'Vercel', 'Cloudflare'],
    icon: 'devops',
  },
];

const icons = {
  webapp: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  api: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  ui: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  devops: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export function Services() {
  return (
    <section className={styles.container} id="services" aria-labelledby="services-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Services</p>
        <h2 id="services-title" className={styles.title}>
          How I can help your project
        </h2>
        <p className={styles.description}>
          Four core areas where I deliver value. Each engagement is tailored to your needs.
        </p>
      </header>

      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.title} className={styles.card}>
            <div className={styles.cardIcon}>
              {icons[service.icon as keyof typeof icons]}
            </div>

            <header className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
            </header>

            <p className={styles.cardDescription}>{service.description}</p>

            <div className={styles.cardDeliverables}>
              <h4 className={styles.deliverablesTitle}>What you get</h4>
              <ul className={styles.deliverablesList} role="list">
                {service.deliverables.map((item, i) => (
                  <li key={i} className={styles.deliverableItem}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cardTech}>
              <h4 className={styles.techTitle}>Core technologies</h4>
              <div className={styles.techTags}>
                {service.tech.map((t, i) => (
                  <span key={i} className={styles.techTag}>
                    <code>{t}</code>
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaText}>Don&apos;t see exactly what you need?</p>
        <a href="#contact" className="btn btn-primary">
          Let&apos;s discuss your project
        </a>
      </div>
    </section>
  );
}