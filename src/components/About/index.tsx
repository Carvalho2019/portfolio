import styles from './styles.module.scss';

export function About() {
  return (
    <section className={styles.container} id="about" aria-labelledby="about-title">
      <div className={styles.grid}>
        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>About me</p>
            <h2 id="about-title" className={styles.title}>
              Turning complex problems into clean solutions
            </h2>
          </header>

          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span className={styles.highlightValue}>4+</span>
              <span className={styles.highlightLabel}>Years shipping code</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightValue}>12+</span>
              <span className={styles.highlightLabel}>Projects delivered</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightValue}>8</span>
              <span className={styles.highlightLabel}>Tech stack core</span>
            </div>
          </div>

          <div className={styles.narrative}>
            <p>
              I&apos;m a full-stack developer based in Luanda, Angola, with over four years
              of experience building web applications for startups and established
              companies across Europe, Africa, and South America.
            </p>
            <p>
              My focus is on writing maintainable, scalable code &mdash; whether that&apos;s
              architecting a React/Node.js platform, optimizing database queries in
              PostgreSQL or MongoDB, or setting up CI/CD pipelines on AWS. I care
              about developer experience as much as user experience.
            </p>
            <p>
              Currently open to freelance projects and full-time opportunities where
              I can contribute to meaningful products and grow alongside a strong
              engineering team.
            </p>
          </div>

          <a
            href="/CurriculumVitaeGeral.pdf"
            download
            className="btn btn-primary"
          >
            Download r&eacute;sum&eacute;
          </a>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.imageWrapper}>
            <img
              src="/images/about.jpeg"
              alt="Cl&eacute;sio Carvalho working at his desk"
              className={styles.image}
            />
          </div>
        </div>
<<<<<<< HEAD
        <Image
          src={imgAbout}
          alt="Clésio Carvalho a trabalhar como developer"
          width={1024}
          height={1024}
          layout="responsive"
          className={styles.ImageAbout}
        />
=======
>>>>>>> 0d8768d0f8481efeb77175b417fae654995848ab
      </div>
    </section>
  );
}