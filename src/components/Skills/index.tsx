import styles from './styles.module.scss';

const skillCategories = [
  {
    category: 'Frontend',
    icon: 'frontend',
    skills: [
      { name: 'React', level: 90, years: 4 },
      { name: 'TypeScript', level: 85, years: 3 },
      { name: 'Next.js', level: 80, years: 3 },
      { name: 'HTML5 / CSS3', level: 95, years: 5 },
      { name: 'Tailwind CSS', level: 85, years: 2 },
      { name: 'Chakra UI', level: 70, years: 1 },
    ],
  },
  {
    category: 'Backend',
    icon: 'backend',
    skills: [
      { name: 'Node.js', level: 85, years: 4 },
      { name: 'PHP / Laravel', level: 80, years: 4 },
      { name: 'PostgreSQL', level: 75, years: 3 },
      { name: 'MongoDB', level: 70, years: 2 },
      { name: 'REST APIs', level: 90, years: 4 },
      { name: 'GraphQL', level: 65, years: 1 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: 'tools',
    skills: [
      { name: 'Git / GitHub', level: 90, years: 5 },
      { name: 'Docker', level: 75, years: 2 },
      { name: 'AWS (EC2, S3, RDS)', level: 70, years: 2 },
      { name: 'CI/CD (GitHub Actions)', level: 80, years: 3 },
      { name: 'Linux / Bash', level: 80, years: 4 },
      { name: 'Testing (Jest, Cypress)', level: 70, years: 2 },
    ],
  },
];

export function Skills() {
  return (
    <section className={styles.container} id="skills" aria-labelledby="skills-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Technical skills</p>
        <h2 id="skills-title" className={styles.title}>
          Technologies I work with daily
        </h2>
        <p className={styles.description}>
          Proficiency based on professional experience. Always learning.
        </p>
      </header>

      <div className={styles.grid}>
        {skillCategories.map((cat) => (
          <article key={cat.category} className={styles.category}>
            <header className={styles.categoryHeader}>
              <span className={styles.categoryIcon} aria-hidden="true">
                {cat.icon === 'frontend' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                )}
                {cat.icon === 'backend' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M6 15h12M10 3v4M14 3v4" />
                  </svg>
                )}
                {cat.icon === 'tools' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                )}
              </span>
              <h3 className={styles.categoryTitle}>{cat.category}</h3>
            </header>

            <ul className={styles.skillList} role="list">
              {cat.skills.map((skill) => (
                <li key={skill.name} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillMeta}>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                      <span className={styles.skillYears}>{skill.years}y</span>
                    </span>
                  </div>
                  <div className={styles.skillBar} role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} proficiency`}>
                    <div
                      className={styles.skillProgress}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
