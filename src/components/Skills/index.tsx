import { useRef, useEffect, useState } from 'react';
import styles from './styles.module.scss';

const skillCategories = [
  {
    category: 'Frontend',
    icon: 'frontend' as const,
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
    icon: 'backend' as const,
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
    icon: 'tools' as const,
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

const icons: Record<string, React.ReactNode> = {
  frontend: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  backend: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M6 15h12M10 3v4M14 3v4" />
    </svg>
  ),
  tools: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [barsInView, setBarsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setActiveIndex((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setActiveIndex((i) => Math.min(skillCategories.length - 1, i + 1));
    };
    el.addEventListener('keydown', handleKey);
    return () => el.removeEventListener('keydown', handleKey);
  }, []);

  const next = () => setActiveIndex((i) => (i + 1) % skillCategories.length);
  const prev = () => setActiveIndex((i) => (i - 1 + skillCategories.length) % skillCategories.length);

  return (
    <section ref={sectionRef} className={styles.container} id="skills" aria-labelledby="skills-title" tabIndex={-1}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Technical skills</p>
        <h2 id="skills-title" className={styles.title}>
          Technologies I work with daily
        </h2>
        <p className={styles.description}>
          Proficiency based on professional experience. Always learning.
        </p>
      </header>

      <div className={styles.sliderWrapper}>
        <nav className={styles.tabs} role="tablist" aria-label="Skill categories">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.category}
              className={`${styles.tab} ${activeIndex === i ? styles.tabActive : ''}`}
              onClick={() => setActiveIndex(i)}
              role="tab"
              aria-selected={activeIndex === i}
              type="button"
            >
              <span className={styles.tabIndex}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.tabLabel}>{cat.category}</span>
            </button>
          ))}
        </nav>

        <div className={styles.sliderViewport}>
          <div
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {skillCategories.map((cat, i) => (
              <div key={cat.category} className={styles.slide} role="tabpanel" aria-hidden={activeIndex !== i}>
                <div className={styles.slideHeader}>
                  <span className={styles.slideIcon} aria-hidden="true">
                    {icons[cat.icon]}
                  </span>
                  <h3 className={styles.slideTitle}>{cat.category}</h3>
                </div>

                <ul className={styles.skillList} role="list">
                  {cat.skills.map((skill, skillIdx) => (
                    <li key={skill.name} className={styles.skillItem}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillMeta}>
                          <span className={styles.skillLevel}>{skill.level}%</span>
                          <span className={styles.skillYears}>{skill.years}y</span>
                        </span>
                      </div>
                      <div
                        className={styles.skillBar}
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency`}
                      >
                        <div
                          className={`${styles.skillProgress} ${barsInView && activeIndex === i ? styles.animate : ''}`}
                          style={{ '--target-width': `${skill.level}%`, '--bar-index': `${skillIdx}` } as React.CSSProperties}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sliderNav}>
          <button className={styles.navArrow} onClick={prev} aria-label="Previous category" type="button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <span className={styles.sliderCounter} aria-live="polite">
            {String(activeIndex + 1).padStart(2, '0')} <span className={styles.sliderDivider}>/</span> {String(skillCategories.length).padStart(2, '0')}
          </span>
          <button className={styles.navArrow} onClick={next} aria-label="Next category" type="button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
