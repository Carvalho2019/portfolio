import styles from "./styles.module.scss";

export function About() {
  return (
    <section
      className={styles.container}
      id="about"
      aria-labelledby="about-title"
    >
      <div className={styles.grid}>
        <div className={styles.content}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>What I'm Building Toward</p>
            <h2 id="about-title" className={styles.title}>
              Turning complex problems into clean solutions
            </h2>
          </header>

          <div className={styles.highlights}>
            <p className={styles.highlight}>
              Currently a backend developer by profession, entrepreneur by choice.
              I split my time between a large company, freelance projects — building
              architecture from the ground up through to final delivery — and my own business,
              applying every bit of over-engineering possible in learning scenarios.
              Always balancing the challenges of an engineer with those of an entrepreneur.
            </p>
          </div>

          <a
            href="#contact"
            className="btn btn-primary"
          >
            GET IN TOUCH
          </a>
        </div>

        <div className={styles.narrative}>
          <p>
            I’m a software engineer focused on building reliable systems and
            using technology to solve real-world business problems.
          </p>
          <p>
            With 5 years of experience in software engineering, I’ve worked
            across backend development, infrastructure, DevOps, and
            observability. I build and maintain production systems with a s
            trong focus on reliability, scalability, monitoring, and operational
            visibility.
          </p>
          <p>
            I’m also co-founder of <b>okaíke</b>, an integrated logistics
            platform built for the Angolan domestic market. The platform
            connects delivery couriers, carriers, and warehouse operations while
            providing best-route traceability across the logistics process.
          </p>
          <p>
            I enjoy working at the intersection of{" "}
            <b>software engineering, infrastructure, and business</b>, turning
            complex operational problems into practical and scalable systems.
          </p>
        </div>
      </div>
    </section>
  );
}
